const selectEl = document.querySelector('select')
selectEl.addEventListener('change', showOptionsInfo)

function showOptionsInfo(e) {
    const valuesList = []

    const optionsList = Array.from(e.target.options)

    optionsList.forEach(function (option) {
        if (option.selected) {
            valuesList.push(option.value)
        }
    })

    console.log(valuesList);
}