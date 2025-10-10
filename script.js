const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result");

const charCountBtn = document.querySelector("#char-count-btn");
const reverseBtn = document.querySelector("#reverse-btn");
const randomCharBtn = document.querySelector("#random-char-btn");
const uppercaseBtn = document.querySelector("#uppercase-btn");
const lowercaseBtn = document.querySelector("#lowercase-btn");
const copyBtn = document.querySelector("#copy-btn");

userInput.addEventListener("input", () => {
  result.textContent = `Characters: ${userInput.value.length} ${getEmoji(
    userInput.value
  )}`;
  result.style.backgroundColor = "#f0f0f0";
});

function getCharCount(str) {
  return str.length;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function randomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function toUppercase(str) {
  return str.toUpperCase();
}

function toLowercase(str) {
  return str.toLowerCase();
}

function getEmoji(str) {
  if (str.length === 0) return "⚠️";
  if (str.length < 5) return "🙂";
  if (str.length < 10) return "😎";
  return "🔥";
}

charCountBtn.addEventListener("click", () => {
  const input = userInput.value;
  result.textContent = `Characters: ${getCharCount(input)} ${getEmoji(input)}`;
  result.style.backgroundColor = "#ffe0b2";
});

randomCharBtn.addEventListener("click", () => {
  const input = userInput.value;
  result.textContent = `Random Character: ${randomChar(input)} ${getEmoji(
    input
  )}`;
  result.style.backgroundColor = "#c8e6c9";
});

reverseBtn.addEventListener("click", () => {
  const input = userInput.value;
  result.textContent = `Reversed: ${reverseString(input)}`;
  result.style.backgroundColor = "#fff59d"; // light yellow
});

uppercaseBtn.addEventListener("click", () => {
  const input = userInput.value;
  result.textContent = `UPPERCASE: ${toUppercase(input)} ${getEmoji(input)}`;
  result.style.backgroundColor = "#b3e5fc";
});

lowercaseBtn.addEventListener("click", () => {
  const input = userInput.value;
  result.textContent = `lowercase: ${toLowercase(input)} ${getEmoji(input)}`;
  result.style.backgroundColor = "#f8bbd0";
});

copyBtn.addEventListener("click", () => {
  if (result.textContent == "") return;
  navigator.clipboard.writeText(result.textContent).then(() => {
    alert("Result copied to clipboard");
  });
});
