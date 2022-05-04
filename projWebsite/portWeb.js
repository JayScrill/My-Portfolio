window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu() {
  var menuToggle = document.querySelector('.toggle');
  var menu = document.querySelector('.menu');
  menuToggle.classList.toggle('active');
  menu.classList.toggle('active');
}



// Carousel 

let track = document.querySelector('.carousel_track');
let slides = Array.from(track.children);
let nextButton = document.querySelector('.carousel_button-right');
let prevButton = document.querySelector('.carousel_button-left');
let dotsNav = document.querySelector('.carousel_nav');
let dots = Array.from(dotsNav.children);

let slideWidth = slides[0].getBoundingClientRect().width;


//arrange the slides next to each other

let setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

let moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}


let updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}


let hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
}




//when I click left, move the slides to the left position

prevButton.addEventListener('click', e => {
  let currentSlide = track.querySelector('.current-slide');
  let prevSlide = currentSlide.previousElementSibling;
  let currentDot = dotsNav.querySelector('.current-slide');
  let prevDot = currentDot.previousElementSibling;
  let prevIndex = slides.findIndex(slide => slide === prevSlide)

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});


//when I click right, move the slides to the right position

nextButton.addEventListener('click', e => {
  let currentSlide = track.querySelector('.current-slide');
  let nextSlide = currentSlide.nextElementSibling;//moves to the next slide
  let currentDot = dotsNav.querySelector('.current-slide');
  let nextDot = currentDot.nextElementSibling;
  let nextIndex = slides.findIndex(slide => slide === nextSlide)

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

//when I click on the indicator highlight the indicator (dots)

dotsNav.addEventListener('click', e => {
  let targetDot = e.target.closest('button');
  
  if (!targetDot) return;

  let currentSlide = track.querySelector('.current-slide');
  let currentDot = dotsNav.querySelector('.current-slide');
  let targetIndex = dots.findIndex(dot => dot === targetDot);
  let targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
  
})





  //   let amountToMove = nextSlide.style.left;

//   track.style.transform = 'translateX(-' + amountToMove + ')';
//   currentSlide.classList.remove('current-slide');//removes the current slide
//   nextSlide.classList.add('current-slide');//adds current slide to the next element to be able to continue changing slides
// })



//when I click on the nav indicators, move to that slide



















//Alternate code for the above arrow function SetSlidePosition
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';



//Alternate Code fior the above arrow function SetSlidePosition
// slides.forEach((slide, index) => {
//   slide.style.left = slideWidth * index +'px';
// });










//Progress Bar















//console.log('Hello World!');