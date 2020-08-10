const toggleBtn = document.querySelector('.toggleBtn');
const uplog = document.querySelectorAll('.uplog');
const navbar = document.querySelector('.navbar');

toggleBtn.addEventListener("click", ()=> {
  console.log("토글");
  Array.from(uplog).forEach(ele=>{
    ele.classList.toggle("active");
  })
  navbar.classList.toggle("active");

});