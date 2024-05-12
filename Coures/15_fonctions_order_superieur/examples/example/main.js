//

let btns = document.querySelectorAll(".btns button");

btns.forEach(function (ele) {
  ele.onclick = function () {
    btns.forEach(function (ele2) {
      ele2.classList.add("col-r");
    });
    this.classList.remove("col-r");
  };
});
