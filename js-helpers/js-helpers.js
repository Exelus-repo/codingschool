// pomocná funkce pro méně destruktivní odstraňování prvnků z DOMu
function safeRemove(element) {
    const parentElement = element.parentElement;
    if (parentElement) {
        return parentElement.removeChild(element);
    } else {
        console.error("Unable to safely remove provided element. No changes applied.")
        return element;
    }
}