const selectEl = document.querySelector('select')
selectEl.addEventListener('change', showUser)

function showUser(e) {
    console.log(
        e.target.value,
        e.target.selectedIndex,
        selectEl.selectedOptions,
    );
}