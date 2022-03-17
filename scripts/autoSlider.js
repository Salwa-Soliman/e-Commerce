var ul = document.querySelector(".auto-slider ul"),
  images = document.querySelectorAll(".auto-slider ul img"),
  position = 0,
  startSlideShow = setInterval(autoSlide, 20);

// images.forEach(img => {
//     img.addEventListener('mouseover', () => clearInterval(startSlideShow));
//     img.addEventListener('mouseleave', () => startSlideShow = setInterval(autoSlide, 20));
// })

function autoSlide() {
  //if it hasn't reached the end => increase position
  if (position > -1334) {
    position -= 2;
  } else {
    position = 0;
  }
  //if it's at the end => reset position
  ul.style.left = `${position}px`;
}
