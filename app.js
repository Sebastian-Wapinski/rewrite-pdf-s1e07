const timeEl = document.querySelector('input[name="time"]')

const formEl = document.querySelector('form')
formEl.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    timeEl.value = e.timeStamp
    console.log(timeEl.value);
}


