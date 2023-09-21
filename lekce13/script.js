const container = document.getElementsByTagName('div')[0];

console.log(container);

const htmlCollection = container.children;
const nodeList = container.childNodes;

console.log(htmlCollection);
console.log(nodeList);

// Pomocná funkce pro identifikaci bílých znaků
function isWhiteCharOnly(string) {
    return /^\s+$/.test(string);
}

for (let i = 0; i < nodeList.length; i++) {
    if (nodeList[i].nodeValue !== null && isWhiteCharOnly(nodeList[i].nodeValue)) {
        continue;
    }

    // změna textového uzlu
    if (nodeList[i].nodeName === '#text') {
        nodeList[i].nodeValue = 'Ahoj';
    }

    console.log(nodeList[i]);
}

// query selector -> je bezbečné pracovat s nodeListem
// vráceným z querySelectoAll jako s HTML kolekcí -> neobsahuje textové uzly
const queryResult = document.querySelectorAll('p');

console.log(queryResult);

const paragraphs = document.getElementsByTagName('p');

console.log(paragraphs);

const newParagrah = document.createElement('p');
newParagrah.innerText = '<p>Nový odstavec</p>';

container.appendChild(newParagrah);

console.log(queryResult);
console.log(paragraphs);

// třídy
class GameObject {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // getters + setters
    set xCoord(x) {
        this.x = x;
    }

    get xCoord() {
        return this.x;
    }

    // Methods
    isColliding(gameObject) {
        // return (this.x > gameObject.x + gameObject.width)...
    }
}

// dědičnost
class Player extends GameObject {
    constructor(x, y, width, height, hp) {
        super(x, y, width, height);
        this.hp = hp;
    }

    // methods
    move(velocity) {
        this.x += velocity.x; // velocity může nabývat záporných hodnot
        this.y += velocity.y;
    }
}
