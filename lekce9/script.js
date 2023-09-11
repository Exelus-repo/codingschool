const numberAsString = "10";
const stdNumber = 10;

console.log("Rovná se:")
console.log(numberAsString == stdNumber);
console.log(numberAsString === stdNumber);

console.log("Nerovná se:")
console.log(numberAsString != stdNumber);
console.log(numberAsString !== stdNumber);

console.log("Negace:");
console.log(!numberAsString);
console.log(!stdNumber);
console.log(!""); /* prázdný řetězec je považován za nepravdu */
console.log(!0); /* nula je považována za nepravdu */
console.log(!null); /* null je považován za nepravdu */
console.log(!undefined); /* undefined je považován za nepravdu */

/* pole */

const array = [1, 2, 3, 4, 5, 6];
const array2 = ['a', 'b', 'c'];
console.log("------POLE------");

console.log(array[2]);
console.log(array.slice(2, 4));

console.log(array2.concat(array));

console.log("------POLE------");

console.log("------DATE------");
const datum = new Date();

console.log(datum);

console.log("------DATE------");
