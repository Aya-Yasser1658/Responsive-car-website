/*Responsive code for menu-bar*/
let menuBar=document.querySelector("#menu-bar")
let amenu=document.querySelector(".middel")

function showmenu(){
    menuBar.classList.toggle("fa-times")
    amenu.classList.toggle("active")
}

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));