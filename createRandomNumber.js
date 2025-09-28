export function createRandomNumber() {
  const modeSelect = document.getElementById("mode_select");
  const amariSelect = document.getElementById("amari_select");

  // エラーハンドリング: DOM要素の存在確認
  if (!modeSelect || !amariSelect) {
    console.error("必要なDOM要素が見つかりません");
    return [0, 0, 0, 0]; // デフォルト値を返す
  }

  const index = modeSelect.value;
  const amari_ratio = amariSelect.value === "true" ? 1 : 0;
  let hijosu = 0; // 被除数（わられる数）
  let josu = 0;   // 除数（わる数）
  let sho = 0;    // 商（答え）
  let amari = 0;  // あまり

  switch (index) {
    case "0": // (2桁)÷(1桁) 商が1桁
      josu = Math.floor(Math.random() * 8 + 2);  // 除数: 2-9
      sho = Math.floor(Math.random() * (9 - 10 / josu) + Math.floor(10 / josu) + 1);
      break;
    case "1": // (2桁)÷(1桁) 商が2桁
      josu = Math.floor(Math.random() * 8 + 2);  // 除数: 2-9
      sho = Math.floor(Math.random() * (99 / josu - 10) + 10);
      break;
    case "2": // (3桁)÷(1桁) 商が2桁
      josu = Math.floor(Math.random() * 8 + 2);  // 除数: 2-9
      sho = Math.floor(Math.random() * (99 - 100 / josu) + Math.floor(100 / josu));
      break;
    case "3": // (2桁)÷(2桁) 商が1桁
      josu = Math.floor(Math.random() * 15 + 10); // 除数: 10-24
      sho = Math.floor(Math.random() * (99 / josu - 2) + 2);
      break;
    case "4": // (3桁)÷(2桁) 商が1桁
      josu = Math.floor(Math.random() * 88 + 12); // 除数: 12-99
      sho = Math.floor(Math.random() * (9 - 100 / josu) + Math.floor(100 / josu) + 1);
      break;
    case "5": // (3桁)÷(2桁) 商が2桁
      josu = Math.floor(Math.random() * 18 + 12); // 除数: 12-29
      sho = Math.floor(Math.random() * (950 / josu - 10) + 10);
      break;
  }
  amari = Math.floor((Math.random() * (josu - 1) + 1) * amari_ratio);
  hijosu = Math.floor(sho * josu + amari);

  // もしも被除数が想定外のときの修正
  if ((index === "0" || index === "1" || index === "3") && hijosu > 99) {
    hijosu = 99;
    amari = hijosu % josu;
  } else if ((index === "2" || index === "4" || index === "5") && hijosu > 999) {
    hijosu = 999;
    amari = hijosu % josu;
  }


  // if (hijosu > 99 || hijosu < 10) console.log(hijosu, josu, sho, amari);
  // if (sho > 9 || sho < 2) console.log(hijosu, josu, sho, amari);

  return [hijosu, josu, sho, amari];
}
