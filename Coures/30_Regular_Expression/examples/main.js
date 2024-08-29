// ================== les modifiers : =========================
/**
 * regex = /pattern/modifiers ,
 * new RegExp(pattern , modifiers)
 * Modifiers :  g , i , m
 * match : return Array | null
 */
let str = "sidi va à l'école , Sidi , sIdi , siDi , sidI";

let regex = /sidi/gi;

console.log(str.match(regex));

// ======================== Ranges ======================
/**
 * (X|Y) => X or Y
 * [0-9]
 * [^0-9]
 * [a-z]
 * [^a-z]
 * [A-Z]
 * [^A-Z]
 * [abc]
 * [^abc]
 * [Exp1Exp2] => Exp1 And Exp2
 * [^Exp1Exp2] =>
 */

let tld = "Com Net Org Info code IO";

let tldRegx = /(com|net|org)/gi;

console.log(tld.match(tldRegx));

let nums = "12345678910";

let numsRegx = /[3-7]/g;

console.log(nums.match(numsRegx));

let notNums = "12345678910";

let notNumsRegx = /[^0-4]/g;

console.log(notNums.match(notNumsRegx));

let exemple = "OS1 OS2 OS3OS OS8 OS8OS";

let exempleRegx = /OS[5-9]OS/g;

console.log(exemple.match(exempleRegx));
