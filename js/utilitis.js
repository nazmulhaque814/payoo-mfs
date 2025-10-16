function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).ariaValueMax;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;
}


function getInputFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}