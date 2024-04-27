const alphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);
alphabet.push("_");

const encrypt = (text, key) => {
  const newAlphabet = [...alphabet];
  for (let i = 0; i < key; i++) newAlphabet.unshift(newAlphabet.pop());

  return text
    .toUpperCase()
    .replace(/\ /g, "_")
    .split("")
    .map((letter) => newAlphabet[alphabet.findIndex((l) => l == letter)])
    .join("");
};

const decrypt = (text, key) => {
  const newAlphabet = [...alphabet];
  for (let i = 0; i < key; i++) newAlphabet.push(newAlphabet.shift());

  return text
    .toUpperCase()
    .replace(/\ /g, "_")
    .split("")
    .map((letter) => newAlphabet[alphabet.findIndex((l) => l == letter)])
    .join("");
};

const k = 17;
const msg = `acesta este un test have fun`;

console.log("msg:", msg);
const enc = encrypt(msg, k);

console.log("encypted", enc);
console.log("decypted", decrypt(enc, k));
