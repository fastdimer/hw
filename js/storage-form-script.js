const form = document.querySelector('[data-form]');
const formValues = document.querySelector('[data-form-values]');

const storageKey = 'userData';

function getData() {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    data.age = Number(data.age);

    return data;
}

function saveData() {
    const data = getData();
    localStorage.setItem(storageKey, JSON.stringify(data));
}

function restoreData() {
    const savedData = localStorage.getItem(storageKey);

    if(!savedData) {
        return;
    }

    const data = JSON.parse(savedData);

    form.elements.email.value = data.email || '';
    form.elements.age.value = data.age || '';
    form.elements.message.value = data.message || '';

}

function showData(data) {
    formValues.textContent = JSON.stringify(data, null, 2);
}

form.addEventListener('input', () => {
    saveData();
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const data = getData();

    saveData();
    showData(data);
});

form.addEventListener('reset', () => {
    localStorage.removeItem(storageKey);
    formValues.textContent = '';
});

restoreData();