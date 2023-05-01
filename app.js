const formEl = document.querySelector('form')

formEl.addEventListener('reset', function(e) {
    const userConfirm = confirm('Are you sure?')
    if (!userConfirm) {
        e.preventDefault();
    }
})