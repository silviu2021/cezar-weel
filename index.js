const alphabetEl = document.querySelector(".alphabet");

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

console.log(alphabet[0])
console.log(alphabet[1])

for (let i = 0; i < alphabet.length; i++) {
  const letter = alphabet[i];
  const letterEl = document.createElement("div");
  letterEl.classList.add("letter");
  letterEl.innerHTML = letter;

  const angleDegrees = startAngle + angleIncrement * i;
  const angleRadians = (angleDegrees * Math.PI) / 180;

  const x = centerX + scaledRadius * Math.cos(angleRadians);
  const y = centerY + scaledRadius * Math.sin(angleRadians);

  letterEl.style.top = `${x}%`;
  letterEl.style.left = `${y}%`;

  alphabetEl.appendChild(letterEl);
}
