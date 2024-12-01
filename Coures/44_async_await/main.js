// Méthode 1 :
function getData() {
    return new Promise((res, rej) => {
        let users = ["Sidi"];
        // let users = [];

        if (users.length > 0) {
            res(users);
        } else {
            rej(new Error("No users found"));
        }
    });
}

// getData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Méthode 2 :

function getData2() {
    let users = ["Sidi"];

    if (users.length > 0) {
        return Promise.resolve(users);
    } else {
        return Promise.reject(Error("No users found"));
    }
}

// getData2()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// Méthode 3 :

async function getData3() {
    let users = ["Sidi"];
    if (users.length > 0) {
        return users;
    } else {
        throw new Error("No users found");
    }
}

// getData3()
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));

// ================= awiat ================

async function testAwiat() {
    console.log("Debut : Avant Data");
    // let data = null;
    // getData3()
    //     .then((res) => {
    //         data = res;
    //         console.log(data);
    //     })
    //     .catch((err) => console.log(err));
    let data = await getData3();
    console.log(data);
    console.log("Fin : Apres Data");
}

testAwiat();
