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