const inputEl = document.querySelector('input')

inputEl.addEventListener('keyup', insertNumbers)

function insertNumbers(e) {
    const val = e.target.value
    const len = val.length

    if (isNaN(val)) {
        e.target.value = val.slice(0, len - 1)
    }
}
