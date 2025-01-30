var buttons = document.querySelectorAll(".button");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.toggle("is-active");
  });
});
