document
  .querySelector(".header__navbar-item--has-search")
  .addEventListener("click", function () {
    this.parentElement.classList.toggle("open");
    this.previousElementSibling.focus();
  });
var input = document.querySelector(".header__navbar-search-input");
document
  .querySelector(".header__navbar-item--delete")
  .addEventListener("click", function () {
    input.value = "";
    input.focus();
  });
