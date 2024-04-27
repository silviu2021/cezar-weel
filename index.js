const alphabetEl = document.querySelector(".alphabet");

const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(i + 65)
);

for (const letter of alphabet) {
  const letterEl = document.createElement("div");
  letterEl.classList.add('letter');
  letterEl.innerHTML = letter;
  if(letter == "A"){
    letterEl.style.top="5%";
    letterEl.style.left="50%";
  }
  alphabetEl.appendChild(letterEl);
}
