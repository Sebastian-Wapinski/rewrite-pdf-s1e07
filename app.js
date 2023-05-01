const formEl = document.querySelector('form')
for (const el of formEl.elements) {
    console.log(el);
}

console.log(
  formEl.elements[0], formEl.elements['inputName']  
);