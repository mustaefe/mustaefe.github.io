const sidePar = document.querySelector("#side-par")
const sideParButton = document.querySelector("#side-par-button")
const  novelInfo= document.querySelector(".novel-info")
const novelContant = document.querySelector(".novel-contant")


sideParButton.addEventListener("click", () => {
    var result = sidePar.matches(".open-sidepar");
    if(result === false){
        sidePar.classList.remove("closed-sidepar")
        sidePar.classList.add("open-sidepar")
        novelContant.style.visibility="visible";
        novelInfo.style.visibility="visible";
    } else{
        sidePar.classList.remove("open-sidepar")
        sidePar.classList.add("closed-sidepar")
        novelContant.style.visibility="hidden";
        novelInfo.style.visibility="hidden";
    }
})