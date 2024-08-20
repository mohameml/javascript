let chosen = 3;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

function extracteIndex(index) {
    let e = {};

    if (index == 0) {
        [e, ,] = myFriends;
    } else if (index == 1) {
        [, e] = myFriends;
    } else if (index == 2) {
        [, , e] = myFriends;
    } else {
        throw new Error("Index out of range");
    }

    let {
        title: name,
        available,
        skills: [, lastSkill],
    } = e;

    console.log(
        `My Name is ${name} ${
            available ? "Available" : "Not Available"
        } , Skill : ${lastSkill}`
    );
}

try {
    extracteIndex(2);
} catch (e) {
    console.log(e);
}
