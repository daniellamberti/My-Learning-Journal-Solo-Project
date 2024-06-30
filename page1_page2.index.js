document.addEventListener("DOMContentLoaded", function () {

const hambPic = document.getElementById("hamb-pic");
const hambMenu = document.getElementById("hamb-menu");


hambPic.addEventListener("click", function () {
    console.log("Button Clicked");
 if(hambMenu.style.display === "none" || hambMenu.style.display === "") {
    hambMenu.style.display="flex";
   } else if (hambMenu.style.display==="flex") {
    hambMenu.style.display="none";
   }
 });
 
 })