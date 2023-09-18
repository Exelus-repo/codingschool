// data primárního selectu
const primarySelectData = [
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


// pomocná funkce pro nastavení obsahu selectu
function setSelectOptions(dataSet, select) {
    dataSet.forEach((data) => {
        const option = document.createElement('option');

        option.innerText = data.label;
        option.setAttribute("value", data.value);

        select.appendChild(option);
    });
}

const selectPrimary = document.getElementById("select-primary");

setSelectOptions(primarySelectData, selectPrimary);

// přidání posluchače události
selectPrimary.addEventListener("change", (event) => {
    console.log(event.target.value);
});