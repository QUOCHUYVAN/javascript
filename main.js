const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
  count++;
  countLabel.textContent = count;
}

resetBtn.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
  count--;
  countLabel.textContent = count;
}

// Exercise 2

const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const masterBtn = document.getElementById('masterBtn');
const payPalBtn = document.getElementById('payPalBtn');
const submitBtn = document.getElementById('submitBtn');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

submitBtn.onclick = function(){
  if(myCheckBox.checked){
    subResult.textContent = "You already subscribed!";
  }
  else{
    subResult.textContent = "You are still not subscribe!";
  }
  if(visaBtn.checked){
    paymentResult.textContent = "You are paying with Visa";
  }
  else if(masterBtn.checked){
    paymentResult.textContent = "You are paying with Master Card";
  }
  else if(payPalBtn.checked){
    paymentResult.textContent = "You are paying with Pay Pal";
  }
  else {
    paymentResult.textContent = "You must select a payment method";
  }
}

const userNameBox = document.getElementById('userNameBox');
const secondSubmitBtn = document.getElementById('secondSubmitBtn');
const usernameResult = document.getElementById('usernameResult');


secondSubmitBtn.onclick = function(){
  const userName = userNameBox.value;
  const hasNumber = /\d/;
  if(hasNumber.test(userName) || userName.startsWith(" ")){
    usernameResult.textContent = "Please do not enter a number into name or add the space forward the name!"
  } else {
    usernameResult.textContent = "Hello " + userName + ", hôm nay bạn thế nào?";
  }
}