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
  const length = Math.floor(Math.random() * 8) + 4;
  let teamName = "";
  let golPrygCounter = 1;
  let GolNotPryg = true;
  for (let i = 0; i < length; i++) {
    let flagK = true;
    while (flagK) {
      GolNotPryg = Math.round(Math.random());
      if (GolNotPryg && golPrygCounter < 1) {
        golPrygCounter++;
        newSymbol = glas[Math.floor(Math.random() * glas.length)];
        flagK = false;
      }
      if (!GolNotPryg && golPrygCounter >= 0) {
        golPrygCounter--;
        newSymbol = pryg[Math.floor(Math.random() * pryg.length)];
        flagK = false;
      }
    }
    teamName += newSymbol;
  }
  showName(teamName);
};

function showName(name) {
  const nameField = document.createElement("div");
  const letters = [];
  for (let i = 0; i < name.length; i++) {
    letters[i] = document.createElement("span");
    letters[i].innerText = name[i];
    letters[i].classList.add(`f${Math.floor(Math.random() * 14) + 1}`);
    if (Math.round(Math.random())) letters[i].classList.add("bold");
    if (Math.round(Math.random())) letters[i].classList.add("italic");
    if (Math.round(Math.random() * 0.65))
      letters[i].style.color = getRandomHexColor();
    letters[i].style.fontSize = `${Math.floor(Math.random() * 24) + 48}px`;
    if (Math.round(Math.random() * 0.7))
      letters[i].style.textTransform = "uppercase";
    if (Math.round(Math.random() * 0.85))
      letters[i].style.letterSpacing = Math.random() * 10 - 5 + "px";
  }
  nameField.append(...letters);
  const nameEl = document.querySelector("#js-name-here");
  nameEl.innerHTML = `<p>The name is</p> <p class="name">${name}</p><p>and the logo is</p>`;
  nameEl.append(nameField);
}

function getRandomHexColor() {
  const lightnessMultiplier = 0.67;
  const lightnessFloor = 25;
  let r =
    Math.floor(Math.random() * 256 * lightnessMultiplier) + lightnessFloor;
  let g =
    Math.floor(Math.random() * 256 * lightnessMultiplier) + lightnessFloor;
  let b =
    Math.floor(Math.random() * 256 * lightnessMultiplier) + lightnessFloor;
  let colorNum = r + g * 256 + b * 256 * 256;
  return `#${colorNum.toString(16).padStart(6, 0)}`;
}

function nameGenerator2022() {
  const timer = setInterval(genName, 150);
  setTimeout(
    () => clearInterval(timer),
    Math.round(Math.random() * 2000 + 1000)
  );
}

const genBtn = document.getElementById("gen_btn");
genBtn.addEventListener("click", nameGenerator2022);
