const slides = document.querySelectorAll(".slide");
var counter = 0;
slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const prev = () => {
  counter--;

  slideimage();
};

const next = () => {
  if (counter >= slides.length-1) {
    counter = -1;
    slideimage();
  }
  counter++;

  slideimage();
};

const slideimage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
