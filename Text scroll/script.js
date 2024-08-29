let inputBox = document.querySelector("#inputBox");
let searchIcon = document.querySelector("#searchIcon");
let inputList = document.querySelector(".input-list");
searchIcon.addEventListener("click",()=>{
    inputBox.classList.add("inputBox");
    inputBox.classList.remove("hidden");
    searchIcon.style.display="none";
    inputList.classList.remove("input-list");
    inputList.classList.add("padding0");

})
document.addEventListener("click",(e)=>{
    if(!searchIcon.contains(e.target) && !inputBox.contains(e.target)){
         inputBox.classList.remove("inputBox");
         inputBox.classList.add("hidden");
         searchIcon.style.display = "flex";
         inputList.classList.add("input-list");
         inputList.classList.remove("padding0");
    }
})

// Active links  indication

const sections = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.navLinks');
window.addEventListener('scroll' , () =>{
  let currentPage = ' ';
  sections.forEach(sec =>{
    const sectionTop = sec.offsetTop;
    const sectionHeight = sec.offsetHeight;
    if(pageYOffset >= sectionTop - sectionHeight / 3){
      currentPage = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link =>{
    link.classList.remove('active');
    if(link.getAttribute('href').includes(currentPage)){
      link.classList.add('active');
    }
  })

})


// Loading Animation


const boddy = document.querySelector(".body");
const  svg = document.querySelector(".svg");
window.addEventListener("load",() => {
  setTimeout(() => {
    boddy.classList.add("visible");
    svg.classList.add("hidden");
  }, 8000);
  
  
})