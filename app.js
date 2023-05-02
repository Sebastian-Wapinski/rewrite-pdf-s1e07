const ulEl = document.querySelector('ul')
const formEl = document.querySelector('form')

formEl.addEventListener('submit', checkData)

function checkData(e) {
    const name = e.target.elements.name.value
    const email = e.target.elements.email.value
    const errors = []

    if (name.length === 0) {
        errors.push('Field name is required!')
    }
    if (!email.includes('@')) {
        errors.push('Email need @ sign!')
    }
    if (errors.length > 0) {
        e.preventDefault()
        ulEl.innerHTML = ''
        errors.forEach(function (err) {
            const newLi = document.createElement('li')
            newLi.innerText = err
            ulEl.appendChild(newLi)
        })
    }
}