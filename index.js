// carousel begins here

var slides = document.querySelectorAll(".slide");
var counter = 0;
var forward;
var pos;

slides.forEach(
  (slide, index) => {
    pos = String(index*100) + "%";
    slide.style.left = pos;
  }
);

function nextSlide(){
  counter++;
  if(counter == slides.length)
    counter--;
  
  changeSlide();
}
function prevSlide(){
  counter--;
  if(counter == -1)
    counter++;
  changeSlide();
}

const changeSlide = () => {
  slides.forEach(
    (slide, index) => {
      // pos = String((index-counter)*100) + "%";
      // slide.style.left = pos;
      console.log(counter*100);
      slide.style.transform = `translateX(-${counter * 100}%)`;
    }
  )
}


setInterval(function(){
  if(counter === (slides.length-1)){
    forward = false;
  }else if(counter === 0){
    forward = true;
  }

  if(forward === true){
    nextSlide();
  }else{
    prevSlide();
  }
}, 5000);
// carousel ends here

// to do for tomorrow
// make the links active state when scroll bar moves

var menu = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
}

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
}