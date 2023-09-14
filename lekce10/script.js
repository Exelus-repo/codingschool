// const today = new Date(); // Vytvořte si datum
// const weekDay = today.getDay(); // Získat číselnou hodnotu dne v týdnu (ned = 0, sobota = 6)
// const isTheWeekend = weekDay === 0 || weekDay === 6;
// if (isTheWeekend) {
//     console.log('Dnes je víkend');
// } else {
//     console.log('Dnes není víkend:-(');
// }

const weekDay = new Date().getDay();
if (weekDay === 0 || weekDay === 6) {
    console.log('Dnes je víkend');
} else {
    console.log('Dnes není víkend:-(');
}


// const age = 18
// const cantPurchaseAlcohol = !(age > 18);
// if (cantPurchaseAlcohol) {
//     console.log('Tato osoba nesmí nakupovat alkohol');
// }

const age = 17
if (age < 18) {
    console.log('Tato osoba nesmí nakupovat alkohol');
}

// Negace
const itemsCountInCart = 0;

if (!itemsCountInCart) {
    console.log("Váš košík je prázdný")
}

// Kombinování logických operátorů + opakování funkcí
function canHaveDiscountWithLog(cartPrice, cartItemsCount, code) {
    if ((cartPrice > 2000 || cartItemsCount > 5) && code) {
        console.log("Uživatel má nárok na slevu")
        return true;
    } else {
        console.log("Uživatel nemá nárok na slevu")
        return false;
    }
}

function canHaveDiscount(cartPrice, cartItemsCount, code) {
    // return (cartPrice > 2000 || cartItemsCount > 5) && code !== "";
    return code && (cartPrice > 2000 || cartItemsCount > 5);
}

console.log(canHaveDiscount(1500, 7, "sleva"))

console.log("---- Incrementace ----")

let num = 15;

console.log(num);
console.log(num++);
console.log(num);

console.log(++num);

console.log("---- Decrementace ----")

console.log(num);
console.log(num--);
console.log(num);

console.log(--num);

console.log("---- Pole ----")

const cars = ["Škoda", "BMW", "Mercedes", "Toyota", "Audi", "Peugeot"];
console.log(cars.join("<br>") + "<br>");

for (let index = 0; index < cars.length; index += 2) {
    console.log(`Značka auta: ${cars[index]}`);
}

console.log("Procházení pole od konce")
for (let index = cars.length - 1; index >= 0; index--) {
    console.log(`Značka auta: ${cars[index]}`);
}

console.log("---- for-in ----")

const car = {
    brand: "Škoda",
    model: "Octavia",
    engine: "1.4TSI"
};

console.log(car.brand);
console.log(car["model"]);

for (const key in car) {
    console.log(`Klíč: ${key}, hodnotu: ${car[key]}`);
}

console.log("---- for-of ----")

for (const car of cars) {
    console.log(car);
}

let text = "";
for (const car of cars) {
    text += `<a href="https://www.google.com/search?q=${car}" target="_blank">${car}</a><br/>`;
}

document.write(text);

const js = "Javascript";
let text2 = "";
for (const character of js) {
    text2 += character;
}

document.write(text2);

document.write("<br>");
for (const character of js) {
    document.write(character + "<br>");
}

console.log("---- while ----")

let count = 0
while (count < 10) {
    console.log("The number is " + count);
    count++;
}

for (let count = 0; count < 10; count++) {
    console.log("The number is " + count);
}

let currentCar = cars.pop();
while (currentCar !== "Mercedes") {
    console.log(currentCar);
    currentCar = cars.pop();
}

console.log(currentCar);
console.log(cars);

console.log("---- do-while ----")
let i = 5;

do {
    console.log(i);
    i++;
} while (i < 5);

console.log("---- příkaz continue ----");
const newCars = cars.concat(["Mercedes", "Toyota", "Audi", "Peugeot"]);
console.log(newCars);

for (const car of newCars) {
    if (car === "Mercedes" || car === "BMW" || car === "Audi") {
        continue;
    }

    console.log(car);
}

console.log("---- forEach ----");

// Anonymní funkce - callback
newCars.forEach(function (car) {
    console.log(car);
});

console.log("--------")

function carCallback(car) {
    console.log(car);
}

// Pojmenovaná funkce - callback
newCars.forEach(carCallback);

console.log("--------")

// Anonymní funkce (arrow function) - callback
newCars.forEach((car) => {
    console.log(car);
});

// rozdíl mezi standardní a šipkovou fcí
const numbers = [1, 2, 3, 4, 5, 6];

const pows = numbers.map(function (num) {
    return num * num;
});

console.log(pows);

const pows2 = numbers.map((num) => num * num);

console.log(pows2);

console.log("---- forEach - volitelné parametry callbacku ----");

newCars.forEach((car, index, array) => {
    console.log(car, index, array);
    newCars[index] = car.toLocaleLowerCase();
});

console.log(newCars);
