// localStorage.clear();
// localStorage.setItem("col", "red");
// sessionStorage.setItem("col", "blue");

let input = document.querySelector("input");

if (sessionStorage.getItem("name")) {
    input.value = sessionStorage.getItem("name");
}

input.onchange = function () {
    console.log(this.value);
    sessionStorage.setItem("name", this.value);
};
