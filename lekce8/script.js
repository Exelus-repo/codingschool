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

let array = someText.split(" ");

console.log(array);
console.log(array.length);
console.log(array.reverse());
