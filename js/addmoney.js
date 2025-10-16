document.getElementById('btn-add-money').addEventListener('click', function(event){
  event.preventDefault();

  const addMoney = getInputFieldValueById('add-amount');
  const pinNum = getInputFieldValueById('input-pin');
  
   if(string(pinNum) === '1234'){
       const balance = getTextFieldValueById('account-balance');
       const newBalance = balance + addMoney;

       console.log(newBalance);

       document.getElementById('account-balance').innerText = newBalance;
       
   } 
   else{
    alert('Faild to add money. ');
   }
   

})