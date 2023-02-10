const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnChange = document.querySelector(".btn");
const colorHeading = document.querySelector(".color");
const generateRandom = function () {
  const random = Math.trunc(Math.random() * hex.length + 1);
  return random;
};
btnChange.addEventListener("click", function () {
  const arr = [];
  for (let i = 0; i < 6; i++) {
    let a = generateRandom();
    arr[i] = hex[a];
  }
  colorHeading.innerHTML = `#${arr.join("")}`;
  document.body.style.background = `#${arr.join("")}`;
});
