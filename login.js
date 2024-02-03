const logInEl = document.getElementById("lodinId");
const logInIdConEl = document.getElementById("loginId-con");
const regeIdEl= document.getElementById("regeId");
const regeIdButtEl = document.getElementById("regeIdButt");
const loginFormEl=document.getElementById("login-form");
const loginPasswordEl = document.getElementById("loginPassword");
const loginPhoneNumber = document.getElementById("loginPhoneNumber");


// logInEl.addEventListener('click',(c)=>{
//   c.preventDefault();
//     regeIdEl.style.display='none'
//     logInIdConEl.style.display = 'block';   
// })

// regeIdButtEl.addEventListener('click',(r)=>{
//   r.preventDefault();
//   logInIdConEl.style.display='none'
//   regeIdEl.style.display = 'block';  

// })
firstNameEl.addEventListener('blur',(e)=>{
  validateInputs(e,firstNameError);
});

loginFormEl.addEventListener('click', (e)=>{
 
} )