const submit_btn = document.querySelector(".submit-btn");
const mainContent = document.querySelector(".main-content");
const secondContent = document.querySelector(".second-content");
const score = document.querySelector(".score");
const ratingBtns = document.querySelectorAll(".rating-btn");
let starsScore = 3;

//pridani eventu na element div button
submit_btn.addEventListener("click", onSubmit);
// pro kazdy div tlacitko pridat event na kliknuti

ratingBtns.forEach(btn => {
    btn.addEventListener("click", howMuchStars);
});

//funkce pro skryti a odkryti card elementu
function onSubmit(){
    mainContent.classList.add("hide");
    score.textContent = starsScore;
    secondContent.classList.remove("hide");
}

// zjistit kolik bylo vybrano hvezd pri kliknuti na pocet
function howMuchStars(event){
    ratingBtns.forEach(btn => {
        btn.classList.remove("active");
    });

    if(event.target.classList.contains("rating-btn")){
        event.target.classList.add("active");
        //problem nastane pri kliknuti na cislo :(   opraveno misto a href jsem musel dat div ale proc ??? :D           
    }else {
        event.target.parentElement.classList.add("active");
    }
    // pocet hvezd odeslani
    starsScore = event.target.textContent;
}