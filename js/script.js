const form = document.querySelector('.registration-form');
const clearButton = document.querySelector('.clear-button');
const result = document.querySelector('.result');
const email = form.elements.email;
const password = form.elements.password;
const confirmPassword = form.elements.confirmPassword;
const age = form.elements.age;
const city = form.elements.city;
const terms = form.elements.terms;
const storageKey = 'registrationData';

function showError(input, message) {
    const field = input.closest('.field');
    const error = field.querySelector('.error');
    error.textContent = message;
}

function clearError(input) {
    const field = input.closest('.field');
    const error = field.querySelector('.error');
    error.textContent = '';
}

function validateEmail() {
    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailValue) {
        showError(email, 'email is required');
        return false;
    }

    if(!emailRegex.test(emailValue)) {
        showError(email, 'email is not valid');
        return false;
    }

    clearError(email);
    return true;
}

function validatePassword() {
    const passwordValue = password.value.trim();

    if(passwordValue.length < 8) {
        showError(password, 'minimum 8 characters');
        return false;
    }

    if(!/[0-9]/.test(passwordValue)) {
        showError(password, 'must contain at least one number');
        return false;
    }

    if(!/[A-Za-z]/.test(passwordValue)) {
        showError(password, 'password must contain a letter');
        return false;
    }

    clearError(password);
    return true;
}

function validateConfirmPassword() {
    if(confirmPassword.value !== password.value) {
        showError(confirmPassword, 'passwords do not match.');
        return false;
    }

    if(!confirmPassword.value) {
        showError(confirmPassword, 'confirm password');
        return false;
    }

    clearError(confirmPassword);
    return true;
}

function validateAge() {
    const ageValue = Number(age.value.trim());

    if(!ageValue) {
        showError(age, 'age is required');
        return false;
    }

    if(ageValue < 16 || ageValue > 120) {
        showError(age, 'age must be between 16 and 120');
        return false;
    }

    clearError(age);
    return true;
}

function validateCity() {
    if(!city.value.trim()) {
        showError(city, 'choose a city');
        return false;
    }

    clearError(city);
    return true;
}

function validateTerms() {
    if(!terms.checked) {
        showError(terms, 'you must accept the terms');
        return false;
    }

    clearError(terms);
    return true;
}

function getData() {
    return {
        email: email.value.trim(),
        password: password.value.trim(),
        age: age.value.trim(),
        city: city.value.trim(),
        terms: terms.checked,
        confirmPassword: confirmPassword.value.trim()
    }
    }

function saveData() {
    const data = getData();
    localStorage.setItem(storageKey, JSON.stringify(data));
}

function restoreData() {
    const savedData = localStorage.getItem(storageKey);
    if(!savedData){
        return;
    }

    const data = JSON.parse(savedData);
    email.value = data.email || '';
    password.value = data.password || '';
    confirmPassword.value = data.confirmPassword || '';
    age.value = data.age || '';
    city.value = data.city || '';
    terms.checked = data.terms || false;
}

form.addEventListener('input', (event) => {
    saveData();
});

form.addEventListener('change', (event) => {
    saveData();
});

form.addEventListener('focusout', (event) => {
    const input = event.target;

    if(input === email) {
        validateEmail();
    }

    if(input === password) {
        validatePassword();
    }

    if(input === confirmPassword) {
        validateConfirmPassword();
    }

    if(input === age) {
        validateAge();
    }

    if(input === city) {
        validateCity();
    }

    if(input === terms) {
        validateTerms();
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();
    const isAgeValid = validateAge();
    const isCityValid = validateCity();
    const isTermsValid = validateTerms();

    if(!isEmailValid){
        email.focus();
        return;
    }

    if(!isPasswordValid){
        password.focus();
        return;
    }

    if(!isConfirmPasswordValid){
        confirmPassword.focus();
        return;
    }

    if(!isAgeValid){
        age.focus();
        return;
    }

    if(!isCityValid){
        city.focus();
        return;
    }

    if(!isTermsValid){
        terms.focus();
        return;
    }

    const data = getData();
    result.textContent = JSON.stringify(data, null, 2);
    saveData();
});

clearButton.addEventListener('click', () => {
    form.reset();
    localStorage.removeItem(storageKey);
    result.textContent = '';

    const errors = form.querySelectorAll('.error');

    errors.forEach((error) => {
        error.textContent = '';
    });
});

restoreData();