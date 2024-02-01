const firstNameEl=document.getElementById("firstName");
const firstNameError=document.getElementById("firstNameError")

const lastNameEl=document.getElementById("lastName");
const lastNameError=document.getElementById("lastNameError")

const emailEl = document.getElementById("email");
const emailError=document.getElementById("emailError")

const phoneNumberEl = document.getElementById("phoneNumber");
const phoneNumberError=document.getElementById("phoneNumberError")

const passwordEl = document.getElementById("password");
const passwordError=document.getElementById("passwordError")

const dobEl=document.getElementById("dob");
const dobError=document.getElementById("dobError")

const submitEl = document.getElementById("submit");


const eyeOpen=document.getElementById("eyeOpen");

const eyeClose=document.getElementById("eyeClose");


const url = 'https://socialapis-yrtm.onrender.com/user/signin';

const passwordIconEl=document.getElementById("passwordIcon");

const logInEl = document.getElementById("lodInId");

const logInIdConEl = document.getElementById("logInId-con");
const regeIdEl= document.getElementById("regeId")


logInEl.addEventListener('click',(c)=>{
  c.preventDefault();

  if(logInIdConEl.style.display === 'none'){
    regeIdEl.style.display='none'
    logInIdConEl.style.display = 'block';
    
  }else{
    logInIdConEl.style.display = 'none';
  }
})

passwordIconEl.addEventListener('click',()=>{
  
    if(passwordEl.type==='password'){
      passwordEl.type='text'
      eyeOpen.classList.toggle("d-none")
      eyeClose.classList.toggle("d-none")
    }else{
      passwordEl.type="password"
      eyeOpen.classList.toggle("d-none")
      eyeClose.classList.toggle("d-none")
    }
})

const validateInputs=(e,el)=>{
  el.textContent=e.target.value===""?"*Required":''
};


  firstNameEl.addEventListener('blur',(e)=>{
    validateInputs(e,firstNameError);
  });


  lastNameEl.addEventListener('blur',(e)=>{
    validateInputs(e,lastNameError);
  });

  emailEl.addEventListener('blur',(e)=>{
    validateInputs(e,emailError);
  });

  phoneNumberEl.addEventListener('blur',(e)=>{
    validateInputs(e,phoneNumberError);
  });

  passwordEl.addEventListener('blur',(e)=>{
    validateInputs(e,passwordError);
  });

  dobEl.addEventListener('blur',(e)=>{
    validateInputs(e,dobError);
  });



  const postDataToDb=()=>{
    
  const data = {
    "firstName": firstNameEl.value,
    "lastName": lastNameEl.value,
        "email": emailEl.value,
        "phoneNumber": phoneNumberEl.value,
        "password": passwordEl.value,
        "dob":dobEl.value
    }
   


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
    
    // Check if the response is not empty before trying to parse it as JSON
    if (response.headers.get('content-length') === '0') {
      console.log('User Registered');
      // You may want to perform additional actions here
      return;
    }

    return response.json();
  })
  .then(data => {
    // This block will be executed only if the response is in JSON format
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  }





submitEl.addEventListener('click',  (e) => {
  e.preventDefault();
  if(firstNameEl.value!=='' || lastNameEl.value!=='' || emailEl.value!=='' || phoneNumberEl.value!=='' || passwordEl.value!=='' || dobEl.value!==''){
    postDataToDb();
    alert("User Regesterd Successfully")

  }
  
  else{
    alert("ENTER Valid Details")
  }
});
