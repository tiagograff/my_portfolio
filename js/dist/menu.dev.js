"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.getElementById("menuHamburguer");
  var menuList = document.getElementById("menuList");
  var menuImg = document.getElementById("menuImg");
  var isXImage = false;
  menuIcon.addEventListener("click", function () {
    menuList.classList.toggle("show");
    menuImg.style.margin = "20px 0";
  });
  menuImg.addEventListener("click", function () {
    if (!isXImage) {
      menuImg.src = "../img/x.png";
    } else {
      menuImg.src = "../img/menu-bar.jpg";
    }

    isXImage = !isXImage;
  });
});