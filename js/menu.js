document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menuHamburguer");
  const menuList = document.getElementById("menuList");
  const menuImg = document.getElementById("menuImg");
  let isXImage = false;

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
