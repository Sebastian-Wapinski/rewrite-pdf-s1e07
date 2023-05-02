const fileEl = document.querySelector('input')

fileEl.addEventListener('change', showInfoFile)

function showInfoFile(e) {
    const file = e.target.files[0]
    console.log(
        file.name,
        file.size,
        file.type,
    );
}


