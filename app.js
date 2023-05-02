const textEl = document.querySelector('textarea')
textEl.addEventListener('change', showText)
textEl.addEventListener('input', prepareHeight)

function showText(e) {
    console.log(e.target.value);
}

function prepareHeight(e) {
    const item = e.target
    // console.log(e);

    if (item.scrollHeight > item.offsetHeight) {
        item.style.height = item.scrollHeight + 'px'
    }
}