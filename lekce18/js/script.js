const maxInputCount = 5;

function createFileUploadInputs() {
    if (document.querySelectorAll('input[type="file"]').length < maxInputCount) {
        const fileNameInput = document.createElement('input');
        fileNameInput.type = 'text';
        fileNameInput.name = 'filename[]';

        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.name = 'file[]';
        fileInput.accept = 'image/*';

        const wrapper = document.createElement('div');

        wrapper.appendChild(fileNameInput);
        wrapper.appendChild(fileInput);

        const fileInputsDiv = document.getElementsByClassName('file-inputs')[0];
        fileInputsDiv.appendChild(wrapper);
    }
}

function removeLastFileInputs() {
    const fileInputsDiv = document.getElementsByClassName('file-inputs')[0];

    const fileInputWrappers = fileInputsDiv.children;

    if (fileInputWrappers.length > 1) {
        fileInputsDiv.removeChild(
            fileInputWrappers[fileInputWrappers.length - 1]
        );
    }
}


const addInputButton = document.getElementsByClassName('add-inputs')[0];

// přidáme event listener
addInputButton.addEventListener('click', createFileUploadInputs);

const removeInputButton = document.getElementsByClassName('remove-inputs')[0];

// přidáme event listener
removeInputButton.addEventListener('click', removeLastFileInputs);
