const colorEl = document.querySelector('input')
colorEl.addEventListener('change', changeBGColor)

function changeBGColor(e) {
    const body = document.body
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    const color = e.target.value

    body.style.backgroundColor = color
    body.style.color = invertColor(color)
}

function invertColor(hex) {
    console.log(hex);
    let color = '#'
    for (let i = 1; i < 6; i = i + 2) {
        const dec = 255 - parseInt(hex.substr(i, 2), 16)
        console.log(dec);
        color += (dec < 16 ? '0' : '') + dec.toString(16)
        console.log(color);
    }
    return color
}