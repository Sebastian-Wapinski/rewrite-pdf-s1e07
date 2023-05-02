const sizeList = document.querySelectorAll('[type="radio"]')

sizeList.forEach(function (element) {
    element.addEventListener('change', showValue)
})

function showValue(e) {
    console.log(e.target.value);
}


