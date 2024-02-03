const logInEl = document.getElementById("lodInId");
const logInIdConEl = document.getElementById("logInId-con");
const regeIdEl= document.getElementById("regeId");
const regeIdButtEl = document.getElementById("regeIdButt");


logInEl.addEventListener('click',(c)=>{
  c.preventDefault();
    regeIdEl.style.display='none'
    logInIdConEl.style.display = 'block';   
})

regeIdButtEl.addEventListener('click',(r)=>{
  r.preventDefault();
  logInIdConEl.style.display='none'
  regeIdEl.style.display = 'block';  

})