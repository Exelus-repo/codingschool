const paragraphs = document.getElementsByClassName("paragraph");

console.log(paragraphs);

// jak iterovat přes HTML kolekci pomocí for-of
// for (paragraph of paragraphs) {
//     paragraph.innerText = "Ahoj!";
//     paragraph.style.fontSize = "2rem";
//     paragraph.style.color = "blue";
// }

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].innerText = `Ahoj ${i}!`;
    paragraphs[i].style.fontSize = "2rem";
    paragraphs[i].style.color = "blue";
}

// procházení pole/HTML kolekce od konce
// for (let i = paragraphs.length - 1; i >= 0; i--) {
//     paragraphs[i].innerText = `Ahoj ${i}!`;
//     paragraphs[i].style.fontSize = "2rem";
//     paragraphs[i].style.color = "blue";
// }

// velmi destruktivní metoda odstranění - úplně zlikviduje element
const removedParagraph = paragraphs[1].remove();

console.log(paragraphs, removedParagraph);

// méně destruktivní metoda - odstraňovaný element je návratová hodnota metody removeChild
console.log(document.body.removeChild(paragraphs[1]));

// pomocná funkce pro méně destruktivní odstraňování prvnků z DOMu
function safeRemove(element) {
    const parentElement = element.parentElement;
    if (parentElement) {
        return parentElement.removeChild(element);
    }
    return null;
}

const removedParagraph2 = safeRemove(paragraphs[1]);
console.log(removedParagraph2);


console.log(paragraphs);

const anchor = document.createElement('a');
anchor.innerText = "Google";
anchor.setAttribute("href", "https://www.google.com");

// přidá odkaz do elementu body (protože jsme metodu insertBefore
// zavolali práve na body) před element paragraphs[0]
document.body.insertBefore(anchor, paragraphs[0]);

// Práce se selectem

const selectData = [
    {
        label: "Volba 1",
        value: "volba1",
    },
    {
        label: "Volba 2",
        value: "volba2",
    },
    {
        label: "Volba 3",
        value: "volba3",
    },
    {
        label: "Volba 4",
        value: "volba4",
    },
    {
        label: "Volba 5",
        value: "volba5",
    },
    {
        label: "Volba 6",
        value: "volba6",
    },
];


const select = document.getElementById("select");

console.log(select);

// Přidání jedné option
// const option1 = document.createElement("option");
// option1.innerText = "Volba 1";
// option1.setAttribute("value", "volba1");

// select.appendChild(option1);

selectData.forEach((data) => {
    const option = document.createElement('option');

    option.innerText = data.label;
    option.setAttribute("value", data.value);

    select.appendChild(option);
});

// přidání posluchače události

select.addEventListener("change", (event) => {
    console.log(event.target.value);
});


// replaceChild + document.getElementsByTagName

const div = document.getElementsByTagName("div")[0];
const header = document.getElementsByClassName("header")[0];

const newHeader = document.createElement("h3");
newHeader.innerText = header.innerText;

// první argument - nový element, druhý argument - element, který cheme nahradit
div.replaceChild(newHeader, header);


// query selectors
const nav = document.getElementById("nav");
const links = nav.querySelectorAll("a");

console.log(links);

const newLink = document.createElement("a");
newLink.innerText = "Odkaz 2";
newLink.setAttribute("href", "#");

nav.insertBefore(newLink, links[1]);

const space = document.createTextNode(" ");
nav.insertBefore(space, links[1]);

console.log(document.getElementsByTagName("nav"));

console.log(nav.children, nav.childNodes);