let items = document.querySelectorAll("[data-color]");
let div = document.querySelector(".rec");

if (localStorage.getItem("color")) {
    div.style.backgroundColor = localStorage.getItem("color");
    items.forEach((ele) => {
        ele.classList.remove("active");
    });
    document
        .querySelector(`[data-color=${localStorage.getItem("color")}]`)
        .classList.add("active");
}

items.forEach((ele) => {
    // pour chaque item on ajoute un event click :
    ele.addEventListener("click", function () {
        // en cas de click on ajoute la classe active
        ele.classList.add("active");
        // on supp active des autre items
        items.forEach((ele) => {
            if (ele != this) {
                ele.classList.remove("active");
            }
        });
        // on recupere la col du ele :
        localStorage.setItem("color", ele.getAttribute("data-color"));
        div.style.backgroundColor = ele.getAttribute("data-color");
    });
});
