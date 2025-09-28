export function createTable() {
  const TBL = document.getElementById("calc-table");

  for (let i = 0; i < 6; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
      const td = document.createElement("td");
      tr.appendChild(td);
    }
    TBL.appendChild(tr);
  }

  TBL.rows[1].cells[2].innerText = ")";
}
