let arr = [1, 2, 3, 11, 1, 4, 11];

let ens = new Set(arr);

console.log(ens.size);
console.log(ens.add(9));
console.log(ens.delete(1));
console.log(ens);
console.log(ens.has(3));
//ens.clear();
// console.log(ens);

const iter = ens.values();

for (const e of iter) {
    console.log(e);
}
