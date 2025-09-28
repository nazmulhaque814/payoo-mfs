document.getElementById('btn-cash-out')
.addEventListener('click', function(event){
    event.preventDefault();

    const cashOutInput= document.getElementById('input-cash-out').value;
    console.log(cashOutInput);
    const cashOut = parseFloat('cashOutInput');
    const pinInut = document.getElementById('input-cash-out-pin').value;
    console.log(pinInut)

    if(pinInut === '1234'){
        console.log('Cash out succesfull');

        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        const tBalance = parseFloat(balance);

        const newbalance = tBalance - cashOutInput;
        console.log(newbalance);

        document.getElementById('account-balance').innerText = newbalance;

    }
    else{
        alert('Failed to cash out! Please try again.');
    }
});