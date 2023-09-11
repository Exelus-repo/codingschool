function helloWorld() {
    const text = "Hello World!";

    console.log(text);
    document.write(text);
}

/**
 * Funkce pro výpočet DPH.
 * @param {number} price Cena bez DPH
 * @param {number} vatInPerc DPH v procentech (10/15/21)
 * @param {boolean} print Zda rovnou vytisknout do konzole
 * @returns Vypočtenou cenu včetně DPH
 */
function calculateVat(price, vatInPerc, print) {
    const calculation = price + price * (vatInPerc / 100);

    if (print) {
        /* Zpětné apostrofy - template string -> pomocí ${} můžeme do řetězce vložit proměnnou */
        console.log(`Vypočtená cena včetně DPH: ${calculation}`);
    }

    return calculation;
}

helloWorld();

const vatCalculated = calculateVat(0, 21, true);

if (vatCalculated !== 0) {
    console.log("Cena je vyšší než nula!");
} else {
    console.log("Cena je rovna nule!");
}

/**
 * Vypočte DPH a vytiskne dodatečné informace do konzole.
 * @param {number} price Cena produktu
 * @param {number} vatInPerc DPH v procentech
 * @returns Vypočtená cena včetně DPH
 */
function calculateVatWithInfo(price, vatInPerc) {
    switch (vatInPerc) {
        case 21:
            console.log("Zboží je v běžné výši DPH.")
            break;
        case 15:
            console.log("Zboží je v první snížené sazbě DPH.")
            break;
        case 10:
            console.log("Zboží je v druhé snížené sazbě DPH.")
            break;
        default:
            console.log("Neznámá výše DPH.");
    }

    return price + price * (vatInPerc / 100);
}

const objectNumber = calculateVatWithInfo(100, 15);

console.log(typeof objectNumber);
console.log(typeof objectNumber.toString());

/**
 * Vrací znak na damén indexu.
 * @param {string} text 
 * @param {number} index 
 * @returns Znak na daném indexu nebo prázdná hodnota.
 */
function getCharAt(text, index) {
    if (index < 0) {
        console.error("Index nesmí být menší než nula.");
        return;
    }

    if (index >= text.length) {
        console.error("Index nesmí být větší nebo roven délce textu.");
        return;
    }

    return text[index];
}

const text = "text";

console.log(text[2]);

console.log(getCharAt("Hello World!", 8));
console.log(getCharAt("Hello World!", -4));
console.log(getCharAt("Hello World!", 25));