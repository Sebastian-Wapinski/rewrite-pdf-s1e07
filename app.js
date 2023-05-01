const inputEl = document.querySelector('input')

inputEl.addEventListener('paste', saveNumbers)

function saveNumbers(e) {
    e.preventDefault()

    let inputValue = '';
    const userData = e.clipboardData.getData('Text')

    for (const char of userData) {
        inputValue += isNaN(char) ? '' : char
    }

    e.target.value = inputValue
}


