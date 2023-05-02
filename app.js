const fileEl = document.querySelector('input')

fileEl.addEventListener('change', readFile)
function readFile(e) {
    const file = e.target.files[0]
    console.log(e.target, 'e.target');
    console.log(e.target.files[0], 'e.target.files[0]');

    if (file && file.type.includes('image')) {
        const reader = new FileReader()

        console.log(reader);
        
        reader.onload = function (readerEvent) {
            const newImg = document.createElement('img')
            newImg.src = readerEvent.target.result

            console.log(newImg.src);
            console.log(readerEvent);
            console.log(readerEvent.target);
            console.log(readerEvent.target.result);

            document.body.appendChild(newImg)
        }

        reader.readAsDataURL(file)
    }
}


