const logCon=document.getElementById("logCon");
const loginFormEl=document.getElementById("loginForm");

const loginPhoneNumberEl=document.getElementById("loginPhoneNumber");
const loginPhoneNumberErrorEl=document.getElementById("loginPhoneNumberError");


const loginPasswordEl=document.getElementById("loginPassword");
const loginPasswordError=document.getElementById("loginPasswordError");



const url = 'https://socialapis-yrtm.onrender.com/user/login';

const loginPasswordIconEL=document.getElementById("loginPasswordIcon");


loginPasswordIconEL.addEventListener('click',()=>{
  
    if(loginPasswordEl.type==='password'){
      loginPasswordEl.type='text'
      eyeOpen.classList.toggle("d-none")
      eyeClose.classList.toggle("d-none")
    }else{
      loginPasswordEl.type="password"
      eyeOpen.classList.toggle("d-none")
      eyeClose.classList.toggle("d-none")
    }
})

const validateInputs=(e,el)=>{
  el.textContent=e.target.value===""?"*Required":'';
};


loginPhoneNumberEl.addEventListener('blur',(e)=>{
  validateInputs(e,loginPhoneNumberErrorEl);
});

loginPasswordEl.addEventListener('blur',(e)=>{
  validateInputs(e,loginPasswordError);
});

  
  const getDataFromDb = () => {

// Log in api is working :)
    const data = {
      "phoneNumber": loginPhoneNumberEl.value,
      "password": loginPasswordEl.value
    };
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    fetch(url, options).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      logCon.classList.add("login-response")
      logCon.textContent=`YOUR DATA     
{
Fist Name:${data.firstName}
Last Name:${data.lastName}
Email:${data.email}
Phone Number:${data.phoneNumber}
Password:${data.password}
DOB:${data.dob}
}
`
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
  };
  





loginFormEl.addEventListener('submit',  (e) => {
  e.preventDefault();
  if(loginPhoneNumberEl.value!=='' && loginPasswordEl.value!==''){
      getDataFromDb(); 
  }
  
  else{
    alert("ENTER Valid Details")
  }
});
