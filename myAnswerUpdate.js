export function myAnswerUpdate(sho) {
  const TBL = document.getElementById("calc-table");

  // 自身の回答で商の部分を更新する。
  const myShoArray = [];
  for (let j = 3; j < 6; j++) {
    myShoArray.push(TBL.rows[0].cells[j].innerText);
  }
  const mySho = Number(myShoArray.join(""));
  document.getElementById("sho-input").value = mySho;

  const index = document.getElementById("mode_select").value;

  // 正しく商を立てると色がつく実装
  switch (index) {
    case "0": {
      TBL.rows[0].cells[4].style.backgroundColor =
        sho === Number(TBL.rows[0].cells[4].innerText) ? "orangered" : "antiqueWhite";
      break;
    }
    case "1": {
      TBL.rows[0].cells[3].style.backgroundColor =
        Math.floor(sho / 10) === Number(TBL.rows[0].cells[3].innerText) ? "orangered" : "antiqueWhite";
      if (TBL.rows[0].cells[4].innerText) {
        TBL.rows[0].cells[4].style.backgroundColor =
          sho % 10 === Number(TBL.rows[0].cells[4].innerText) ? "orangered" : "antiqueWhite";
      } else {
        TBL.rows[0].cells[4].style.backgroundColor = "antiqueWhite";
      }
      break;
    }
    case "2": {
      TBL.rows[0].cells[4].style.backgroundColor =
        Math.floor(sho / 10) === Number(TBL.rows[0].cells[4].innerText) ? "orangered" : "antiqueWhite";
      if (TBL.rows[0].cells[5].innerText) {
        TBL.rows[0].cells[5].style.backgroundColor =
          sho % 10 === Number(TBL.rows[0].cells[5].innerText) ? "orangered" : "antiqueWhite";
      } else {
        TBL.rows[0].cells[5].style.backgroundColor = "antiqueWhite";
      }
      break;
    }
    case "3": {
      TBL.rows[0].cells[4].style.backgroundColor =
        sho === Number(TBL.rows[0].cells[4].innerText) ? "orangered" : "antiqueWhite";
      break;
    }
    case "4": {
      TBL.rows[0].cells[5].style.backgroundColor =
        sho === Number(TBL.rows[0].cells[5].innerText) ? "orangered" : "antiqueWhite";
      break;
    }
    case "5": {
      TBL.rows[0].cells[4].style.backgroundColor =
        Math.floor(sho / 10) === Number(TBL.rows[0].cells[4].innerText) ? "orangered" : "antiqueWhite";
      if (TBL.rows[0].cells[5].innerText) {
        TBL.rows[0].cells[5].style.backgroundColor =
          sho % 10 === Number(TBL.rows[0].cells[5].innerText) ? "orangered" : "antiqueWhite";
      } else {
        TBL.rows[0].cells[5].style.backgroundColor = "antiqueWhite";
      }
      break;
    }
  }

  const myAmariArray = [];
  // 自身の回答であまりの部分を更新する。
  switch (index) {
    case "0": {
      myAmariArray.push(TBL.rows[3].cells[4].innerText);
      break;
    }
    case "1": {
      myAmariArray.push(TBL.rows[5].cells[4].innerText);
      break;
    }
    case "2": {
      myAmariArray.push(TBL.rows[5].cells[5].innerText);
      break;
    }
    case "3": {
      myAmariArray.push(TBL.rows[3].cells[3].innerText);
      myAmariArray.push(TBL.rows[3].cells[4].innerText);
      break;
    }
    case "4": {
      myAmariArray.push(TBL.rows[3].cells[4].innerText);
      myAmariArray.push(TBL.rows[3].cells[5].innerText);
      break;
    }
    case "5": {
      myAmariArray.push(TBL.rows[5].cells[4].innerText);
      myAmariArray.push(TBL.rows[5].cells[5].innerText);
      break;
    }
  }
  const myAmari = Number(myAmariArray.join(""));
  document.getElementById("amari-input").value = myAmari !== 0 ? myAmari : null;
}
