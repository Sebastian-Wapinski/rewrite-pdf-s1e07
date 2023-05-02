const formEl = document.querySelector('form')
formEl.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()

    const confirm = e.target.elements['confirm']
    // console.log(e);

    if (!confirm.checked) {
        const numberAgreement = confirm.value

        alert('Confirm agreement no: ' + numberAgreement)
    } else {
        alert('Thank you! Data was send.')
    }
}


