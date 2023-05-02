const spanEl = document.querySelector('span')
const inputEl= document.querySelector('input')

inputEl.addEventListener('input', checkEmail)

function checkEmail(e) {
    const self = e.target
    const email = self.value

    if (!email.includes('@')) {
        self.style.border = '1px solid red'
        spanEl.innerText = 'Where is @'
    } else {
        self.style.border = '1px solid green'
        spanEl.innerText = ''
    }
}