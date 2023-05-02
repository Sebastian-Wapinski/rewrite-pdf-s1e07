const pElement = document.querySelector('p')
const fileEl = document.querySelector('input')

fileEl.addEventListener('change', readFile)
function readFile(e) {
    const file = e.target.files[0]
    console.log(e);
    console.log(e.target, 'e.target');
    console.log(e.target.files[0], 'e.target.files[0]');

    const checkE = e
    console.log(checkE, 'checkE');

    if (file && file.type.includes('text')) {
        const reader = new FileReader()

        console.log(checkE, 'checkE inside');
        console.log(reader);
        
        reader.onload = function (readerEvent) {
            const content = readerEvent.target.result
            pElement.textContent = content

            console.log(checkE, 'checkE inside inside');
            console.log(content);
            console.log(readerEvent);
            console.log(readerEvent.target);
            console.log(readerEvent.target.result);
            
        }
        reader.readAsText(file, 'UTF-8')
        
    } else {
        alert('Wybierz plik tekstowy')
    }
}


