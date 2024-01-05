document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuHamburguer");
  const menuList = document.getElementById("menuList");

  menuIcon.addEventListener("click", function () {
    menuList.classList.toggle("show");
  });
});
