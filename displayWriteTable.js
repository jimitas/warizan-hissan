export function displayWriteTable(randomNumberArray) {
  const TBL = document.getElementById("calc-table");
  const [hijosu, josu, sho, amari] = randomNumberArray;

  // 除数の表示
  TBL.rows[1].cells[1].innerText = josu % 10;
  if (josu > 9) TBL.rows[1].cells[0].innerText = Math.floor(josu / 10);
  // 被除数の表示
  if (hijosu > 99) {
    TBL.rows[1].cells[3].innerText = Math.floor(hijosu / 100);
    TBL.rows[1].cells[4].innerText = Math.floor((hijosu % 100) / 10);
    TBL.rows[1].cells[5].innerText = (hijosu % 10) % 10;
  } else if (hijosu < 100) {
    TBL.rows[1].cells[3].innerText = Math.floor(hijosu / 10);
    TBL.rows[1].cells[4].innerText = hijosu % 10;
  }
  if (josu > 9) TBL.rows[1].cells[0].innerText = Math.floor(josu / 10);

  // 問題のタイプによって、ドロップできる場所を制限し、サポートする。
  const index = document.getElementById("mode_select").value;
  switch (index) {
    case "0":
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          if ((i === 0 && j === 4) || (i === 2 && (j === 3 || j === 4)) || (i === 3 && j === 4)) {
            TBL.rows[i].cells[j].setAttribute("class", "droppable-elem");
            TBL.rows[i].cells[j].style.backgroundColor = "antiqueWhite";
          }
        }
      }
      break;

    case "1":
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          if ((i !== 1 && i !== 5 && (j === 3 || j === 4)) || (i === 5 && j === 4)) {
            TBL.rows[i].cells[j].setAttribute("class", "droppable-elem");
            TBL.rows[i].cells[j].style.backgroundColor = "antiqueWhite";
          }
        }
      }
      break;

    case "2":
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          if (
            ((i === 0 || i === 3 || i === 4) && (j === 4 || j === 5)) ||
            (i === 2 && (j === 3 || j === 4)) ||
            (i === 5 && j === 5)
          ) {
            TBL.rows[i].cells[j].setAttribute("class", "droppable-elem");
            TBL.rows[i].cells[j].style.backgroundColor = "antiqueWhite";
          }
        }
      }
      break;
    case "3":
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          if ((i === 0 && j === 4) || ((i === 2 || i === 3) && (j === 3 || j === 4))) {
            TBL.rows[i].cells[j].setAttribute("class", "droppable-elem");
            TBL.rows[i].cells[j].style.backgroundColor = "antiqueWhite";
          }
        }
      }
      break;
    case "4":
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          if ((i === 0 && j === 5) || (i === 2 && j >= 3 && j <= 5) || (i === 3 && (j === 4 || j === 5))) {
            TBL.rows[i].cells[j].setAttribute("class", "droppable-elem");
            TBL.rows[i].cells[j].style.backgroundColor = "antiqueWhite";
          }
        }
      }
      break;
    case "5":
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 6; j++) {
          if (((i === 0 || i === 5) && (j === 4 || j === 5)) || (i >= 2 && i <= 4 && j >= 3 && j <= 5)) {
            TBL.rows[i].cells[j].setAttribute("class", "droppable-elem");
            TBL.rows[i].cells[j].style.backgroundColor = "antiqueWhite";
          }
        }
      }
      break;
  }
}
