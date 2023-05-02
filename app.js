const labelEl = document.querySelector('label')
const sizeList = document.querySelectorAll('[type="radio"]')

labelEl.addEventListener('click', showSizes)

function showSizes(e) {
    sizeList.forEach(function (element) {
        console.log(
            element.value,
            '=>',
            element.checked,
        );
    })
}


