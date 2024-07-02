document.addEventListener("DOMContentLoaded", function () {
   
const hambPicDiv = document.getElementById("hamb-pic-div");
const hambMenu = document.getElementById("hamb-menu");

hambPicDiv.addEventListener("click", function () {
 if(hambMenu.style.display === "none" || hambMenu.style.display === "") {
    hambMenu.style.display="flex";
   } else if (hambMenu.style.display==="flex") {
    hambMenu.style.display="none";
   }
 });
 
 })