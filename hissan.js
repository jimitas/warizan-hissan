import * as se from "./se.js";
import { createTable } from "./createTable.js";
import { createRandomNumber } from "./createRandomNumber.js";
import { displayInputNumber } from "./displayInputNumber.js";
import { clearTable } from "./clearTable.js";
import { clearInput } from "./clearInput.js";
import { displayWriteTable } from "./displayWriteTable.js";
import { myAnswerUpdate } from "./myAnswerUpdate.js";
import { eraseTable } from "./eraseTable.js";
import { checkAnswer } from "./checkAnswer.js";
import { makeQuestion } from "./makeQuestion.js";

export function hissan() {
  let hijosu = 0;
  let josu = 0;
  let sho = 0;
  let amari = 0;

  let mondai_flag = false; //問題を出したかどうかのフラグ判定

  // 初期化
  createTable();
  numberSet();
  loadCoins(); // ページ読み込み時にコインを復元

  // トースト通知を表示（Bootstrap 5のトースト機能を使用）
  setTimeout(() => {
    const toastElement = document.getElementById('infoToast');
    if (toastElement) {
      if (typeof bootstrap !== 'undefined' && bootstrap.Toast) {
        const toast = new bootstrap.Toast(toastElement);
        toast.show();
      } else {
        console.error('Bootstrap Toast is not available');
      }
    } else {
      console.error('Toast element not found');
    }
  }, 500);

  // 問題を作成する。
  document.getElementById("btn-question").addEventListener("click", createQuestion, false);
  function createQuestion() {
    // 被乗数、除数、商、余りを決定し、代入する。
    const randomNumberArray = createRandomNumber();

    // 問題の種類が選択されていない場合
    if (!randomNumberArray) {
      se.alert.currentTime = 0;
      se.alert.play();
      return;
    }

    se.set.currentTime = 0;
    se.set.play();
    mondai_flag = true;
    [hijosu, josu, sho, amari] = randomNumberArray;

    clearTable();
    displayInputNumber(randomNumberArray);
    displayWriteTable(randomNumberArray);
  }

  // 自分で問題を作成する。
  document.getElementById("btn-make-question").addEventListener(
    "click",
    () => {
      const makeNumberArray = makeQuestion(mondai_flag);

      if (makeNumberArray) {
        [hijosu, josu, sho, amari, mondai_flag] = makeNumberArray;

        clearTable();
        displayInputNumber(makeNumberArray);
        displayWriteTable(makeNumberArray);
      }
    },
    false
  );

  //数字を消す
  document.getElementById("btn-erase").addEventListener("click", () => {
    se.reset.currentTime = 0;
    se.reset.play();
    eraseTable();
  });

  //全部の内容を消す
  document.getElementById("btn-clear").addEventListener("click", () => {
    se.alert.currentTime = 0;
    se.alert.play();
    const result = window.confirm("全部の内容を消しますか？");

    if (result) {
      se.reset.currentTime = 0;
      se.reset.play();
      clearInput();
      clearTable();
      mondai_flag = false;
    }
  });

  // ヒントを出す
  document.getElementById("btn-showAnswer").addEventListener(
    "click",
    () => {
      if (mondai_flag === false) {
        se.alert.currentTime = 0;
        se.alert.play();
        alert("「問題を出す」をおしてください。");
        return;
      }
      se.seikai1.currentTime = 0;
      se.seikai1.play();

      if (document.getElementById("amari_select").value === "true")
        alert("答えは、「　" + sho + "　あまり　" + amari + "　」です。自分でも計算してみましょう。");
      else alert("答えは、「　" + sho + "　」です。自分でも計算してみましょう。");
    },
    false
  );

  // ヒントを出す
  document.getElementById("btn-hint").addEventListener(
    "click",
    () => {
      if (mondai_flag === false) {
        se.alert.currentTime = 0;
        se.alert.play();
        alert("「問題を出す」をおしてください。");
        return;
      }
      se.seikai1.currentTime = 0;
      se.seikai1.play();

      const hintNumber = [];
      hintNumber.push(...sho.toString());

      alert("商のはじめの位は「" + hintNumber[0] + "」です。");
    },
    false
  );

  // 答え合わせをする
  document.getElementById("btn-check").addEventListener(
    "click",
    () => {
      if (mondai_flag === false) {
        se.alert.currentTime = 0;
        se.alert.play();
        alert("「問題を出す」をおしてください。");
        return;
      }
      mondai_flag = checkAnswer(sho, amari);
    },
    false
  );

  // ---------------ここから数字のセット

  //関数　数字のセット
  function numberSet() {
    //数パレット内の数字を一旦消去
    var ele = document.getElementById("num-pallet");
    while (ele.firstChild) {
      ele.removeChild(ele.firstChild);
    }

    for (let i = 0; i < 10; i++) {
      const div = document.createElement("div");
      div.innerHTML = i;
      div.setAttribute("class", "num draggable-elem");
      div.setAttribute("draggable", "true");
      if (i === 0) {
        div.addEventListener("click", () => {
          if (div.classList.contains("diagonal")) {
            div.classList.remove("diagonal");
          } else {
            div.classList.add("diagonal");
          }
        });
      }
      div.addEventListener("touchstart", touchStartEvent, false);
      div.addEventListener("touchmove", touchMoveEvent, false);
      div.addEventListener("touchend", touchEndEvent, false);
      document.getElementById("num-pallet").appendChild(div);
    }
  }

  //マウスでのドラッグを可能にする。
  var dragged;

  /* events fired on the draggable target */
  document.addEventListener("drag", function (event) {}, false);

  document.addEventListener(
    "dragstart",
    function (event) {
      // store a ref. on the dragged elem
      dragged = event.target;
    },
    false
  );

  /* events fired on the drop targets */
  document.addEventListener(
    "dragover",
    function (event) {
      // prevent default to allow drop
      event.preventDefault();
    },
    false
  );

  document.addEventListener(
    "drop",
    function (event) {
      // prevent default action (open as link for some elements)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if (event.target.className.match(/droppable-elem/)) {
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
        se.pi.currentTime = 0;
        se.pi.play();
        numberSet();
        myAnswerUpdate(sho);
      }
    },
    false
  );

  //ドラッグ開始の操作
  function touchStartEvent(event) {
    //タッチによる画面スクロールを止める
    event.preventDefault();
  }

  //ドラッグ中の操作
  function touchMoveEvent(event) {
    event.preventDefault();
    //ドラッグ中のアイテムをカーソルの位置に追従
    var draggedElem = event.target;
    var touch = event.changedTouches[0];
    event.target.style.position = "fixed";
    event.target.style.top = touch.pageY - window.pageYOffset - draggedElem.offsetHeight / 2 + "px";
    event.target.style.left = touch.pageX - window.pageXOffset - draggedElem.offsetWidth / 2 + "px";
  }

  //ドラッグ終了後の操作
  function touchEndEvent(event) {
    event.preventDefault();
    //ドラッグ中の操作のために変更していたスタイルを元に戻す
    var droppedElem = event.target;
    droppedElem.style.position = "";
    event.target.style.top = "";
    event.target.style.left = "";
    //ドロップした位置にあるドロップ可能なエレメントに親子付けする
    var touch = event.changedTouches[0];
    //スクロール分を加味した座標に存在するエレメントを新しい親とする
    var newParentElem = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset);

    if (newParentElem.className.match(/droppable-elem/)) {
      // if (newParentElem.className == "droppable-elem") {
      newParentElem.appendChild(droppedElem);
    }
    se.pi.currentTime = 0;
    se.pi.play();
    numberSet();
    myAnswerUpdate(sho);
  }

  // ローカルストレージからコイン数を読み込み、画面に表示
  function loadCoins() {
    const savedCoins = localStorage.getItem("wariHissanCoinCount");
    const coinCount = savedCoins ? parseInt(savedCoins, 10) : 0;
    const scorePallet = document.getElementById("score-pallet");

    // 保存されているコイン数だけコイン画像を表示
    for (let i = 0; i < coinCount; i++) {
      const img = document.createElement("img");
      img.src = "./images/coin.png";
      scorePallet.appendChild(img);
    }
  }

  // コインをリセット（計算問題による確認付き）
  const btnResetCoins = document.getElementById("btn-reset-coins");
  btnResetCoins.addEventListener("click", () => {
    se.alert.currentTime = 0;
    se.alert.play();

    // ランダムな計算問題を生成（3桁÷2桁で割り切れる問題）
    const num2 = Math.floor(Math.random() * 70) + 10;   // 10-79の2桁の除数
    const quotient = Math.floor(Math.random() * 20) + 5; // 5-24の商
    const num1 = num2 * quotient;                        // 割り切れる3桁の被除数を生成
    const correctAnswer = quotient;

    const userAnswer = prompt(`コインをリセットするには、次の計算問題を解いてください。\n\n${num1} ÷ ${num2} = ?`);

    // キャンセルした場合
    if (userAnswer === null) {
      return;
    }

    // 答えが正しいかチェック
    if (parseInt(userAnswer, 10) === correctAnswer) {
      // ローカルストレージをクリア
      localStorage.removeItem("wariHissanCoinCount");
      // 画面上のコインを全て削除
      const scorePallet = document.getElementById("score-pallet");
      scorePallet.innerHTML = "";
      se.reset.play();
      alert("正解です！コインをリセットしました。");
    } else {
      se.alert.currentTime = 0;
      se.alert.play();
      alert(`不正解です。正しい答えは ${correctAnswer} でした。\nコインはリセットされませんでした。`);
    }
  });
}
