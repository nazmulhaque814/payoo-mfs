// console.log('Button clicking added');

//step 1: set evend handler
document.getElementById('btn-log')
.addEventListener('click', function(event){
    //step 2: prevent default behavior (prevent reloading browser)
    event.preventDefault();
console.log('login button click');

// <--step-3: get the phone number -->
const phonenumber = document.getElementById('ph-number').value;
const pinnumber = document.getElementById('pin-number').value;
// console.log(phonenumber.value, pinnumber);

//step-4: verify phone number and pin number

if(phonenumber === '0177' && pinnumber === '12345'){
    console.log('You are Logged in');
    window.location.href = '/home.html';
} else{
    alert('Invalid phone number or pin number');
}
})