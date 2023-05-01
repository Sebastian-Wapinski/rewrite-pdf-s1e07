const btnEl = document.querySelector('button')
btnEl.addEventListener('click', changeInputType)

function changeInputType(e) {
    const defaultType = 'password'
    const inputEl = e.target.previousElementSibling
    const currentType = inputEl.getAttribute('type')
    if (currentType === defaultType) {
        inputEl.removeAttribute('type')
    } else {
        inputEl.setAttribute('type', defaultType)
    }
}



