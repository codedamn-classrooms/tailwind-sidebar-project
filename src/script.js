const html = document.querySelector("html");
const darkButton = document.querySelector("#lightMode");
const lightButton = document.querySelector("#darkMode");

function toggleDark() {
  html.classList.toggle("dark");
  console.log("something");
  changeButton();
}

function changeButton() {
  console.log(html.classList);

  darkButton.classList.toggle("hidden");
  lightButton.classList.toggle("hidden");
}
