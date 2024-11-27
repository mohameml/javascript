function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b == 0) {
        throw new Error("b must be different to zero ");
    }
    return a / b;
}

export { add, sub, mult, div };
