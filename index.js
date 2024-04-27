const alphabetEl = document.querySelector(".alphabet");
const alphabet2El = document.querySelector(".alphabet2");

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
).reverse();

let lastElement = alphabet.pop();
alphabet.unshift(lastElement);

const angleIncrement = 360 / alphabet.length;

const radius = 50;

const centerX = 50;
const centerY = 50;
const distance = 0.9;
const scaledRadius = radius * distance;
const startAngle = 180;

for (let i = 0; i < alphabet.length; i++) {
  const letter = alphabet[i];
  const letterEl = document.createElement("div");
  const letterAltEl = document.createElement("div");
  letterEl.classList.add("letter");
  letterAltEl.classList.add("letter");
  letterAltEl.classList.add("letterAlt");
  letterEl.innerHTML = letter;
  letterAltEl.innerHTML = letter;

  const angleDegrees = startAngle + angleIncrement * i;
  const angleRadians = (angleDegrees * Math.PI) / 180;

  const x = centerX + scaledRadius * Math.cos(angleRadians);
  const y = centerY + scaledRadius * Math.sin(angleRadians);

  letterEl.style.setProperty("--x", `${x}%`);
  letterAltEl.style.setProperty("--x", `${x}%`);
  letterEl.style.setProperty("--y", `${y}%`);
  letterAltEl.style.setProperty("--y", `${y}%`);

  alphabetEl.appendChild(letterEl);
  alphabet2El.appendChild(letterAltEl);
  setTimeout(() => {
    letterEl.classList.add("loaded");
  }, 100 * (i + 1));
}

setTimeout(() => {
  alphabetEl.classList.add("loaded");
}, (alphabet.length - 1) * 100 + 4000);

setTimeout(() => {
    alphabetEl.classList.add("loaded2");
    alphabet2El.classList.add("loaded2");
  }, (alphabet.length - 1) * 100 + 6000);

setTimeout(()=>{
    document.body.classList.add("loaded");
},100)
