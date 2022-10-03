let slideIndex = 1;
showSlides(slideIndex);


/**
  
 - prevent default button scrolling 
 
 **/

document.addEventListener('keydown', preventKeyBoardScroll, false);

function preventKeyBoardScroll(e) {
  var keys = [32, 33, 34, 35, 37, 38, 39, 40];
  if (keys.includes(e.keyCode)) {
    e.preventDefault();
    return false;
  }
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

async function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("card");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {

  	let containerDimension = slides[i].getBoundingClientRect();
  	let containerWidth = containerDimension.width;
    slides[i].style.opacity = '1';
    slides[i].scrollLeft+=containerWidth;
    await delay(2000);
  }
  for (i = 0; i < dots.length; i++) {
  	
    dots[i].className = dots[i].className.replace(" active", "");
  }
 // slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  //setTimeout(showSlides, 2000);
}

function delay(n)
{
new Promise(r => setTimeout(r, n));
}





