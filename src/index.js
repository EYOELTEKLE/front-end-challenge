let slideIndex = 1;



document.addEventListener('keydown', preventKeyBoardScroll, false);

function preventKeyBoardScroll(e) {
  var keys = [37, 39];
  if (keys.includes(e.keyCode)) {
    e.preventDefault();
    return false;
  }
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}
/**
document.querySelector('.slideshow-container').addEventListener('wheel', preventScroll, {passive: false});

function preventScroll(e){
    e.preventDefault();
    e.stopPropagation();

    return false;
}
**/

function showSlides(n) {
    let current = document.getElementById("" + n);


    /**
     Change each button Style accordingly
      
     **/
    let style = "" + current.style.background;
    if (style == 'rgb(0, 50, 75)') {
        return
        remove(n);
        current.style.background = "#bbb";

    } else {
        remove(n);
        current.style.background = '#00324b';
        move(n);

    }

}

const remove = (n) => {

    for (let i = 1; i <= 4; i++) {
        if (i == n) continue;
        let current = document.getElementById("" + i);
        current.style.background = "#bbb";
    }
}

const move = (n) => {
    let slides = document.querySelectorAll(".card");
    let container = document.querySelector(".slideshow-container");
    for (let i = 1; i <= 4; i++) {

        if (i == n) {

            setTimeout(() => {
                container.style.transform = ' translateX(100px)';
            }, 100);

            console.log(container.style)
        }
    }
}