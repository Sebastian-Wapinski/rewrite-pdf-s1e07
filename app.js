const inputEl = document.querySelector('input')

inputEl.style.border = 'none'

inputEl.addEventListener('input', checkAge)

function checkAge(e) {
    const age = e.target.value

    if(isNaN(age)) {
        e.target.style.border = '1px solid red'
    } else {
        e.target.style.border = '1px solid green'
    }
}