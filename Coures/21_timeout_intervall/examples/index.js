/*  BOM : 
    1 - Introduction 
    2 - Alert , prompt , confirme 
    3 - setTimeout , clearTimeout 
    4 -setIntervall , clearIntervall 


*/

// function sayMessage(user, age) {
//     console.log(`Message for  ${user} , age = ${age}`);
// }

// let id = setTimeout(sayMessage, 3000, "ahmed", 20);

let id = setInterval(function () {
    console.log(1);
}, 1000);

let p = document.querySelector("p");
let count = 0;
let id2 = setInterval(function () {
    count++;
    p.innerText = `Counter : ${count}`;
}, 1000);

let btn = document.querySelector("button");

btn.onclick = function () {
    // clearTimeout(id);
    clearInterval(id2);
};
