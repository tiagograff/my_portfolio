"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var menuIcon = document.getElementById("menuHamburguer");
  var menuList = document.getElementById("menuList");
  menuIcon.addEventListener("click", function () {
    menuList.classList.toggle("show");
  });
});