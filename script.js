let navbar = document.querySelector('.navbar');
let menu = document.querySelector('#menu-bar');
let section = document.querySelectorAll('section');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
  }
for (let i = 0; i < section.length; i++) {
    section[i].onclick=function(){
      menu.classList.remove('fa-times');
      navbar.classList.remove('active')
    }
}
// window.addEventListener('scroll', function(){
//   if(window.pageYOffset>=150){
//       navbar.classList.remove('active');
//   }
//   else{
//       
//   }
// })

window.onscroll=()=>{
  if(window.pageYOffset>50){
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
  }
}

