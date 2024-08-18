let div = document.querySelector(".enf");
// import confetti from "canvas-confetti";
function countdown() {
    let nb = Number(div.innerHTML);
    if (nb <= 0) {
        clearInterval(id);
        confetti();
    } else {
        div.innerHTML -= 1;
    }
}

let id = setInterval(countdown, 1000);
