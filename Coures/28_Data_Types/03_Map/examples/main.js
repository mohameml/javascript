let myMap = new Map([
    ["cle1", "val1"],
    ["cle2", "val2"],
    ["cle3", "val3"],
]);

console.log(myMap);
console.log(myMap.size);
console.log(myMap.set("cle4", "val4"));
console.log(myMap.has("cle1"));
myMap.delete("cle2");
console.log(myMap.get("cle1"));

for (let ele of myMap.keys()) {
    console.log(ele);
}

for (let ele of myMap.values()) {
    console.log(ele);
}

for (let [cle, val] of myMap.entries()) {
    console.log(cle, "->", val);
}
