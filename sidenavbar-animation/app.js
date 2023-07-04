const input = document.querySelector(".input");
const searchIcon = document.querySelector(".fa-magnifying-glass");
const inputContainer = document.querySelector(".input-container");
const openn = document.querySelector(".fa-bars");
const closee = document.querySelector(".fa-xmark");
const menu = document.querySelector(".menu");
const sidenav = document.querySelector(".sidenav-container");
input.addEventListener("input", (e) => {
  console.log(e.target.value);
  if (e.target.value) {
    searchIcon.style.zIndex = "0";
    searchIcon.style.opacity = "1";
    searchIcon.style.left = "5px";
    input.style.transform = "translateX(25px)";
  } else {
    searchIcon.style.zIndex = "-1";
    searchIcon.style.left = "0";
    input.style.transform = "translateX(0px)";
  }
});

openn.addEventListener("click", () => {
  menu.style.transform = "translateY(-25px)";
  sidenav.style.transform = "translateX(0px)";
});

closee.addEventListener("click", () => {
  menu.style.transform = "translateY(0)";
  sidenav.style.transform = "translateX(-500px)";
});
