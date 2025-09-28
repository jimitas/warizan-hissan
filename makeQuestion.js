import { clearInput } from "./clearInput.js";
import * as se from "./se.js";

export function makeQuestion(mondai_flag) {
  if (mondai_flag) {
    se.alert.currentTime = 0;
    se.alert.play();
    alert("新しく作りたい場合は、「全部消す」をおしてください。");
    return;
  }

  const hijosu = Math.floor(Number(document.getElementById("hijosu-input").value));
  const josu = Math.floor(Number(document.getElementById("josu-input").value));

  // バリデーションチェック
  if (!(hijosu >= 10 && hijosu <= 999 && josu >= 1 && josu <= 99)) {
    se.alert.currentTime = 0;
    se.alert.play();
    alert("わられる数は（２、３けた）、わる数は（１、２けた）の数にしてください。");
    clearInput();
    return;
  }
  if (hijosu < josu) {
    se.alert.currentTime = 0;
    se.alert.play();
    alert("わられる数は、わる数よりも大きくしてください。");
    clearInput();
    return;
  }

  se.set.currentTime = 0;
  se.set.play();
  mondai_flag = true;

  const sho = Math.floor(hijosu / josu);
  const amari = hijosu % josu;

  // hijosuとjosuによってselect Indexを変更する。
  if (hijosu < 100 && josu < 10 && sho < 10) document.getElementById("mode_select").value = "0";
  else if (hijosu < 100 && josu < 10 && sho > 9) document.getElementById("mode_select").value = "1";
  else if (hijosu > 99 && josu < 10 && sho > 9) document.getElementById("mode_select").value = "2";
  else if (hijosu < 100 && josu > 9 && sho < 10) document.getElementById("mode_select").value = "3";
  else if (hijosu > 99 && josu > 9 && sho < 10) document.getElementById("mode_select").value = "4";
  else if (hijosu > 99 && josu > 9 && sho > 9) document.getElementById("mode_select").value = "5";

  return [hijosu, josu, sho, amari, mondai_flag];
}
