const inpList = document.querySelectorAll('input')
const spanEl = document.querySelector('span')

inpList.forEach(function (input) {
    input.addEventListener('input', calculate)
})

function calculate(e) {
    let sum = 0
    inpList.forEach(function (inp) {
        sum += Number(inp.value)
    })

    spanEl.innerText = sum
}