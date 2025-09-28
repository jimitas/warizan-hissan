export function createRandomNumber() {
  const index = document.getElementById("mode_select").value;
  const amari_ratio = document.getElementById("amari_select").value === "true" ? 1 : 0;
  let hijosu = 0;
  let josu = 0;
  let sho = 0;
  let amari = 0;

  switch (index) {
    case "0":
      josu = Math.floor(Math.random() * 8 + 2);
      sho = Math.floor(Math.random() * (9 - 10 / josu) + Math.floor(10 / josu) + 1);
      break;
    case "1":
      josu = Math.floor(Math.random() * 8 + 2);
      sho = Math.floor(Math.random() * (99 / josu - 10) + 10);
      break;
    case "2":
      josu = Math.floor(Math.random() * 8 + 2);
      sho = Math.floor(Math.random() * (99 - 100 / josu) + Math.floor(100 / josu));
      break;
    case "3":
      josu = Math.floor(Math.random() * 15 + 10);
      sho = Math.floor(Math.random() * (99 / josu - 2) + 2);
      break;
    case "4":
      josu = Math.floor(Math.random() * 88 + 12);
      sho = Math.floor(Math.random() * (9 - 100 / josu) + Math.floor(100 / josu) + 1);
      break;
    case "5":
      josu = Math.floor(Math.random() * 18 + 12);
      sho = Math.floor(Math.random() * (950 / josu - 10) + 10);
      break;
  }
  amari = Math.floor((Math.random() * (josu - 1) + 1) * amari_ratio);
  hijosu = Math.floor(sho * josu + amari);

  // もしも被除数が想定外のときの修正
  if ((index === 0 || index === 1 || index === 3) && hijosu > 99) {
    hijosu = 99;
    amari = hijosu % josu;
  }else if((index === 2 || index === 4 || index === 5) && hijosu > 999){
    hijosu = 999;
    amari = hijosu % josu;
  }


  // if (hijosu > 99 || hijosu < 10) console.log(hijosu, josu, sho, amari);
  // if (sho > 9 || sho < 2) console.log(hijosu, josu, sho, amari);

  return [hijosu, josu, sho, amari];
}
