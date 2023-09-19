/**
 * Pomocná funkce pro méně destruktivní odstraňování prvků z DOMu.
 * @param {HTMLElement} element 
 * @returns odstraněný element
 */
function safeRemove(element) {
    const parentElement = element.parentElement;
    if (parentElement) {
        return parentElement.removeChild(element);
    } else {
        console.error("Unable to safely remove provided element. No changes applied.")
        return element;
    }
}

/**
 * Pomocná funkce pro vymazání obsahu selectu.
 * @param {HTMLElement} select Element select získaný třeba pomocí document.getElementById
 */
function removeSelectOptions(select) {
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
}

/**
 * Pomocná funkce pro připojení nového obsahu k již existujícímu obsahu selectu.
 * @param {Array} dataSet Pole objektů ve formátu [{lable: "Popisek", value: "Hodnota"}, ...]
 * @param {HTMLElement} select Element select získaný třeba pomocí document.getElementById
 */
function addSelectOptions(dataSet, select) {
    dataSet.forEach((data) => {
        const option = document.createElement('option');

        option.innerText = data.label;
        option.setAttribute("value", data.value);

        select.appendChild(option);
    });
}

/**
 * Pomocná funkce pro nastavení obsahu selectu.
 * @param {Array} dataSet Pole objektů ve formátu [{lable: "Popisek", value: "Hodnota"}, ...]
 * @param {HTMLElement} select Element select získaný třeba pomocí document.getElementById
 */
function setSelectOptions(dataSet, select) {
    removeSelectOptions(select);
    addSelectOptions(dataSet, select);
}