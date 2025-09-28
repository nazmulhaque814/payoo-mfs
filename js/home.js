//add money to the account

//step 1

document.getElementById('btn-add-money')
.addEventListener('click', function(event){

    event.preventDefault();

    //step 2: add the amount & pin number
    const addMoneyInput = document.getElementById('add-amount').value;
    console.log(addMoneyInput);

    const addPinInput = document.getElementById('input-pin').value;
    console.log(addPinInput);

    //step 3: verify pin number
    //it is not a validated way to pin numnber check

    if(addPinInput === '1234'){
        console.log('Adding money to your account');
        //step 4: get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);

        //step-5: add addMoneyInput with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balancenumber = parseFloat(balance);
        const totalBalance = addMoneyNumber + balancenumber;
        console.log(totalBalance);

        //step-6: updated totalBalance to the account balance
        document.getElementById('account-balance').innerText = totalBalance;

    } else{
        alert('Faild to add money! Please try again.');
    }

})