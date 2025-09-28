export function eraseTable() {
  const TBL = document.getElementById("calc-table");

  for (let i = 0; i < 6; i++) {
    if (i === 1) continue;
    for (let j = 0; j < 6; j++) {
      TBL.rows[i].cells[j].innerHTML = "";
    }
  }
  const index = document.getElementById("mode_select").value;

  switch (index) {
    case "0":
      TBL.rows[0].cells[4].style.backgroundColor = "antiqueWhite";
      break;
    case "1":
      TBL.rows[0].cells[3].style.backgroundColor = "antiqueWhite";
      TBL.rows[0].cells[4].style.backgroundColor = "antiqueWhite";
      break;
    case "2":
      TBL.rows[0].cells[4].style.backgroundColor = "antiqueWhite";
      TBL.rows[0].cells[5].style.backgroundColor = "antiqueWhite";
      break;
    case "3":
      TBL.rows[0].cells[4].style.backgroundColor = "antiqueWhite";
      break;
    case "4":
      TBL.rows[0].cells[5].style.backgroundColor = "antiqueWhite";
      break;
    case "5":
      TBL.rows[0].cells[4].style.backgroundColor = "antiqueWhite";
      TBL.rows[0].cells[5].style.backgroundColor = "antiqueWhite";
      break;
  }
}
