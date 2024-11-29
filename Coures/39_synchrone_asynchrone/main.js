//  exemple synchrone :
console.log("a");
console.log("b");
console.log("c");

// exemple asynchrone :
console.log(1);
setTimeout(() => {
    console.log(2);
}, 0);
console.log(3);
