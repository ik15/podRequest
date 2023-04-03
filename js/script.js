
let emailInput = document.querySelector('.email-input');
let submitInput = document.querySelector('.submit-input');
let form = document.querySelector('.inputs-form');
let emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
let errorMessage = document.getElementById('paragraph');

form.addEventListener('submit', (event) => {

  event.preventDefault();
 
  let emailValue = emailInput.value;
  let valid = emailRegex.test(emailValue);
  let addNode = document.createTextNode("Oops! Please add your email");
  let checkNode = document.createTextNode("Oops! Please check your email");

  if(valid === true) {
    errorMessage.style.display = "none";
  }else if(emailValue === "" || emailValue == null){
    errorMessage.appendChild(addNode);
  }else if(valid === false){
    errorMessage.appendChild(checkNode);
    // errorMessage.replaceWith(checkNode);
    // errorMessage.replaceChild(checkNode, addNode);
  }
});