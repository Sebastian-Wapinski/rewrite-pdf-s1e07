const formEl = document.querySelector('form')
console.log(
    formEl.elements[0],
    formEl.action, formEl.method,
    formEl.noValidate,
    formEl.autocomplete
);