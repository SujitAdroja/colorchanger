const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btnChange = document.querySelector(".btn");
const colorHeading = document.querySelector(".color");

btnChange.addEventListener("click", function () {
  const random = Math.trunc(Math.random() * 4 + 1);

  colorHeading.innerHTML = `${colors[random]}`;
  document.body.style.background = `${colors[random]}`;
});
