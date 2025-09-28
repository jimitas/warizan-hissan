import { createTable } from "./createTable.js";

export function clearTable() {
  const TBL = document.getElementById("calc-table");

  while (TBL.firstChild) {
    TBL.removeChild(TBL.firstChild);
  }
  createTable();

  TBL.rows[1].cells[2].innerText = ")";
}
