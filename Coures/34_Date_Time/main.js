datenow = new Date();

// dateBrithDay = new Date(2002, 3, 10);
// console.log(`le jour du mois = ${dateBrithDay.getDate()}`);
// console.log(`le jour de la semaine  = ${dateBrithDay.getDay()}`);

// console.log(
//     `my age is ${(datenow - dateBrithDay) / 1000 / 60 / 60 / 24 / 365}`
// );

function yourCurrentAge(dateOfBrithDay) {
    if (!(dateOfBrithDay instanceof Date)) {
        throw new Error("dateOfBrithDay must be type of Date");
    } else {
        dateNow = new Date();
        age = (dateNow - dateOfBrithDay) / 1000 / 60 / 60 / 24 / 365;
        return Math.floor(age);
    }
}

my_age = yourCurrentAge(new Date(2002, 3, 2));
console.log(my_age);
