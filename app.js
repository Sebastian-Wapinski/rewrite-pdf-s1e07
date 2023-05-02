const selectEl = document.querySelector('select')
selectEl.addEventListener('change', showOptionsInfo)

function showOptionsInfo(e) {
    const optionsList = e.target.querySelectorAll('option')

    optionsList.forEach(option => {
        console.log(
            option.value,
            option.innerText,
            option.selected,
        );
    });
}