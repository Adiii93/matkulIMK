const page1Button = document.getElementById("page1Button");
const page2Button = document.getElementById("page2Button");
const page3Button = document.getElementById("page3Button");

page1Button.addEventListener("click", () => {
  window.location.href = "isian.html";
});

page2Button.addEventListener("click", () => {
  window.location.href = "page2.html";
});

page3Button.addEventListener("click", () => {
  window.location.href = "page3.html";
});