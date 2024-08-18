// window.scrollTo({
//     left: 1200,
//     top: 1500,
//     behavior: "smooth",
// });

let btn = document.querySelector("button");

window.onscroll = function () {
    if (window.scrollY >= 600) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};
