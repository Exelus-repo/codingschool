// data primárního selectu
const primarySelectData = [
    {
        label: '-',
        value: '',
    },
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
];

const secondaryDatasets = {
    volba1: [
        {
            label: "Volba 1 - Secondary 1",
            value: "volba1",
        },
        {
            label: "Volba 1 - Secondary 2",
            value: "volba2",
        },
    ],
    volba2: [
        {
            label: "Volba 2 - Secondary 1",
            value: "volba1",
        },
        {
            label: "Volba 2 - Secondary 2",
            value: "volba2",
        },
        {
            label: "Volba 3 - Secondary 3",
            value: "volba3",
        },
    ],
    volba3: [
        {
            label: "Volba 3 - Secondary 1",
            value: "volba1",
        },
        {
            label: "Volba 3 - Secondary 2",
            value: "volba2",
        },
        {
            label: "Volba 3 - Secondary 3",
            value: "volba3",
        },
        {
            label: "Volba 3 - Secondary 4",
            value: "volba4",
        },
    ]
}

// druhý způsob uchování statických dat
const primarySelectDataAlternativeApproach = [
    {
        label: '-',
        value: '',
    },
    {
        label: "Volba 1",
        value: "volba1",
        subData: [
            {
                label: "Volba 1 - Secondary 1",
                value: "volba1",
            },
            {
                label: "Volba 1 - Secondary 2",
                value: "volba2",
            },
        ],
    },
    {
        label: "Volba 2",
        value: "volba2",
        subData: [
            {
                label: "Volba 2 - Secondary 1",
                value: "volba1",
            },
            {
                label: "Volba 2 - Secondary 2",
                value: "volba2",
            },
            {
                label: "Volba 3 - Secondary 3",
                value: "volba3",
            },
        ],
    },
    {
        label: "Volba 3",
        value: "volba3",
        subData: [
            {
                label: "Volba 3 - Secondary 1",
                value: "volba1",
            },
            {
                label: "Volba 3 - Secondary 2",
                value: "volba2",
            },
            {
                label: "Volba 3 - Secondary 3",
                value: "volba3",
            },
            {
                label: "Volba 3 - Secondary 4",
                value: "volba4",
            },
        ],
    },
];


// pomocná funkce pro vymazání obsahu selectu
function removeSelectOptions(select) {
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
}

// pomocná funkce pro připojení obsahu selectu
function addSelectOptions(dataSet, select) {
    dataSet.forEach((data) => {
        const option = document.createElement('option');

        option.innerText = data.label;
        option.setAttribute("value", data.value);

        select.appendChild(option);
    });
}

// pomocná funkce pro nastavení obsahu selectu
function setSelectOptions(dataSet, select) {
    removeSelectOptions(select);
    addSelectOptions(dataSet, select);
}

const selectPrimary = document.getElementById("select-primary");

setSelectOptions(primarySelectDataAlternativeApproach, selectPrimary);

// přidání posluchače události
selectPrimary.addEventListener("change", (event) => {
    const selectSecondary = document.getElementById('select-secondary');

    if (event.target.value) {
        const selectedObject = primarySelectDataAlternativeApproach.find((element) => element.value === event.target.value);
        setSelectOptions(
            selectedObject.subData,
            selectSecondary
        );
    } else {
        removeSelectOptions(selectSecondary);
    }
});