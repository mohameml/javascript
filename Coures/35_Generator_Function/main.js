function* generate_numbers() {
    yield 1;
    console.log("after yield 1");
    yield 2;
    yield 3;
    yield 4;
}

let generate = generate_numbers();

console.log(generate.next());
console.log(generate.next());

for (let value of generate) {
    console.log(value);
}

console.log(generate.next());
