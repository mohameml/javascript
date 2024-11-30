//  call back Hell :

/*
- 1s pour recupérer une image à partir de serveur 
- 2s pour resizer la photo 
- 3s ajouter un logo
- 1s afficher l'image
*/

// setTimeout(() => {
//     console.log("Récuperation de l'image à partir de serveur");
//     setTimeout(() => {
//         console.log("resizer la photo ");
//         setTimeout(() => {
//             console.log("Ajouter un logo");
//             setTimeout(() => {
//                 console.log("Afficher l'image");
//             }, 1000);
//         }, 1000);
//     }, 2000);
// }, 1000);

// let p = new Promise((resolve, rejected) => {
//     let isSuccess = true;
//     const obj_param = {
//         name: "Sidi",
//         age: 10,
//     };
//     if (isSuccess) {
//         resolve(obj_param);
//     } else {
//         rejected(Error("the id is not found"));
//     }
// });

// // console.log(p);

// p.then((value) => {
//     console.log(value);
//     return value.age * 10;
// })
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Promise all

let p1 = new Promise((res, rej) => {
    setTimeout(() => res(1), 5000);
});
// p1.then((val) => console.log(val));

let p2 = new Promise((res, rej) => {
    setTimeout(() => res(2), 3000);
});

let p3 = new Promise((res, rej) => {
    setTimeout(() => res(3), 2000);
});

let promise_all = Promise.all([p1, p2, p3]);

promise_all
    .then((vals) => {
        console.log(vals);
    })
    .catch((err) => console.log(err));

// console.log(promise_all);
