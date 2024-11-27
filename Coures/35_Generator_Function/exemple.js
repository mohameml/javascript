/**
 *
 * Delegate  Generator :
 */

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

function* generateLettres() {
    yield "A";
    yield "B";
    yield "C";
}

function* generateAll() {
    yield* generateNumbers();
    yield* generateLettres();
    yield [4, 5, 6];
    // yield* [4, 5, 6];
}

let generator = generateAll();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
