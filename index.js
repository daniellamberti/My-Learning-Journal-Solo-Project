document.addEventListener("DOMContentLoaded", function () {

const viewMoreBtn = document.getElementById("view-more");
const viewLessBtn = document.getElementById("view-less");
const articlesHiddenSectionEl = document.getElementById("articles-hidden");
const hambPic = document.getElementById("hamb-pic");
const hambMenu = document.getElementById("hamb-menu");

viewMoreBtn.addEventListener("click", function () {
   articlesHiddenSectionEl.style.display="flex";
   viewLessBtn.style.visibility="visible"; 
   viewMoreBtn.style.visibility="hidden"; 
});

viewLessBtn.addEventListener("click", function () {
    articlesHiddenSectionEl.style.display="none"; 
    document.getElementById("start"). scrollIntoView({ behavior: "smooth" });
    viewLessBtn.style.visibility="hidden";
    viewMoreBtn.style.visibility="visible";
 });

 hambPic.addEventListener("click", function () {
if(hambMenu.style.display === "none" || hambMenu.style.display === "") {
   hambMenu.style.display="flex";
  } else if (hambMenu.style.display==="flex") {
   hambMenu.style.display="none";
  }
});

})