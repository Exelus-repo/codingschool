// Animace pomocí JS

// pomocí selektorů zíkáme HTML prvky z DOMu
const heading = document.getElementsByTagName('h1')[0];
const button = document.getElementById('toggle');

// pomocná proměnná uchovávájící, zda je připojen posluchač události
let headingHasEventListener = false;
// pomocná proměnná zda animace běží - není potřeba, protože použijem intervaId
let isAnimating = false;

// konstanty pro nastavení font-size na záhlaví
const minFontSize = 2.5;
const maxFontSize = 5;


// iniciální nastavení font-size na záhlaví
heading.style.fontSize = `${maxFontSize}rem`;

// proměnná pro uložení ID vráceného funkcí setInterval a zároveň pomocná proměnná zda animace běží
let intervalId = null;

// obsluha události click na záhlaví
function handleHeadingClick(event) {
    const initialFontSize = parseFloat(event.target.style.fontSize);

    if (intervalId === null) {
        // čas je uveden v milisekundách, nezapomňte vždy uložit ID intervalu
        intervalId = setInterval(animateHeading, 50);
    }

    function animateHeading() {
        const currentFontSize = parseFloat(event.target.style.fontSize);
        if ((initialFontSize === maxFontSize && currentFontSize === minFontSize)
            || (initialFontSize === minFontSize && currentFontSize === maxFontSize)) {
            // zastavení intervalu
            clearInterval(intervalId);
            intervalId = null;
        } else {
            const newFontSize = initialFontSize === maxFontSize ? currentFontSize - 0.1 : currentFontSize + 0.1;
            heading.style.fontSize = `${newFontSize}rem`;
        }
    }
}

// přidání obsluhy události na tlačítko
button.addEventListener('click', () => {
    if (headingHasEventListener) {
        heading.removeEventListener('click', handleHeadingClick);
        // headingHasEventListener = false;
        button.innerText = 'Zapnout údálost záhlaví';
    } else {
        heading.addEventListener('click', handleHeadingClick);
        // headingHasEventListener = true;
        button.innerText = 'Vypnout údálost záhlaví';
    }

    headingHasEventListener = !headingHasEventListener;
});

// přidání obsluhy pro změnu titulku
document.getElementById('change-title').addEventListener('click', () => {
    const title = document.getElementsByTagName('title')[0];
    title.innerText = "Testování změny titulku";
})
