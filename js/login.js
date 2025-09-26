// console.log('Button clicking added');

//step 1: set evend handler
document.getElementById('btn-log')
.addEventListener('click', function(event){
    //step 2: prevent default behavior (prevent reloading browser)
    event.preventDefault();
console.log('login button click');

// <--step-3: get the phone number -->
const phonenumber = document.getElementById('ph-number')
console.log(phonenumber.value);
})