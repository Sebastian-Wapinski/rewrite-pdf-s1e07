const formEl = document.querySelector('form')

formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    const company = e.target.elements.company

    console.log(company.value);
})