let number = 10;
let numberAsString = "10.58";

let floatNumber = parseFloat(numberAsString);

console.log(
    floatNumber.toFixed(1)
);

console.log(
    numberAsString.length
);

let someText = "Hello World!";

console.log(someText.length);

console.log(
    someText.toLocaleLowerCase()
);

console.log(
    someText.charAt(someText.length - 1)
);

console.log(someText.slice(6, 11));
console.log(someText.slice(6));
console.log(someText.slice(-3));

console.log(someText.replace('World', 'All'));
console.log(someText);
console.log(someText.split("").reverse().join(""));

/* zřetězení */
const firstName = "John";
const lastName = "Doe";
console.log(firstName + lastName);

let array = someText.split(" ");

console.log(array);
console.log(array.length);
console.log(array.reverse());

const constNumber = 10;
let variableNumber = 7;

console.log("----------------");
console.log(constNumber - variableNumber);
console.log(constNumber + variableNumber);
console.log(constNumber / variableNumber);
console.log(constNumber * variableNumber);
console.log(constNumber % variableNumber);

const str = "ahoj";

console.log("proměnná je: str");
console.log('proměnná je: str');
console.log(`proměnná je: ${str}`);

let myObject = {
    surename: "Smith",
    printName: function () {
        console.log(this.surename);
    }
};

console.log(myObject.name);
console.log(myObject.surename);
myObject.printName();
