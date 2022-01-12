const glas = ["a", "e", "i", "o", "u", "y"];
const pryg = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "z",
];

let genName = function () {
  const length = Math.floor(Math.random() * 14) + 3;
    let teamName = "";
    let golPrygCounter = 1;
    let GolNotPryg = true;
    for (let i = 0; i < length; i++) {
        let flagK = true;
        while (flagK) {
            GolNotPryg = Math.round(Math.random());
            if (GolNotPryg) {
                golPrygCounter++;
                newSymbol = glas[Math.floor(Math.random() * glas.length)];
            } else {
                golPrygCounter--;
                newSymbol = pryg[Math.floor(Math.random() * pryg.length)];
            }
            if (GolNotPryg >= 0 || GolNotPryg <= 2) {flagK = false;}
        } 
        teamName += newSymbol;
    }
    alert(`The name is ${teamName}`);
};

const genBtn = document.getElementById("gen_btn");
genBtn.addEventListener("click", genName);
