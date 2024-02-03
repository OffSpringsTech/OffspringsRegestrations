const loginFormEl=document.getElementById("loginForm");

const loginPhoneNumberEl=document.getElementById("loginPhoneNumber");

const loginPhoneNumberErrorEl=document.getElementById("loginPhoneNumberError");

const loginPasswordEl=document.getElementById("loginPassword");
const loginPasswordError=document.getElementById("loginPasswordError");

const passwordIconEl=document.getElementById("passwordIcon");



console.log(loginPhoneNumberEl,loginPhoneNumberErrorEl)

const validateInputs=(e,el)=>{
  el.textContent=e.target.value===""?"*Required":''
};


loginPhoneNumberEl.addEventListener('blur',(e)=>{
  validateInputs(e,loginPhoneNumberErrorEl);
})

loginPasswordEl.addEventListener('blur',(e)=>{
  validateInputs(e,loginPasswordError);
})