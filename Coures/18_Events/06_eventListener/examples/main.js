//
let div1 = document.querySelector(".div1");

div1.addEventListener("click", function () {
  let ele = document.createElement("div");
  ele.textContent = "DIV2";
  ele.className = "div2";
  document.body.appendChild(ele);
});

// let div2 = document.getElementById("div2");// error
// div2.onclick = function () {
//   console.log("div2");
// };

document.addEventListener("click", function (e) {
  if (e.target.className === "div2") {
    console.log("div2");
  }
});
