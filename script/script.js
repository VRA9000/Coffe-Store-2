const formElement = document.querySelector(".booking-section");
const fNameElement = document.querySelector("#fName_input");
const emailElement = document.querySelector("#email_input");
const textareaElement = document.querySelector("#textarea_input");
const submitBtn = document.querySelector("input[type='button");

const nameText = document.querySelector("input[type='text']")
const emailText = document.querySelector("input[type='email']")
const textareaText = document.querySelector("#textarea");
const successElement = document.querySelector("#success");


submitBtn.addEventListener("click", (e) => {
  e.preventDefault;

if(nameText.value == ""){
  fNameElement.textContent = "Please give name.";
  fNameElement.style.color = "red";
  fNameElement.style.fontSize = "14px";
  return;

}
else if (emailText.value == ""){
  emailElement.textContent = "Please give name.";
  emailElement.style.color = "red";
  emailElement.style.fontSize = "14px";
  return;

}
else if(textareaText.value = ""){
  textareaElement.textContent = " Please provide a message";
  textareaElement.style.color = "red";
  textareaElement.style.fontSize = "14px";
  return;
  
}

else {
  fNameElement.textContent = "";
  emailElement.textContent  = "";
  textareaElement.textContent = "";
  successElement.textContent = "Your message sent!"
  successElement.style.color = "green"

}

})

