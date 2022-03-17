var dots = document.querySelectorAll('.dots div'),
    sliderImages = document.querySelectorAll('.main-slider img'),
    currentIndex = 0,
    startInterval = setInterval(slideShow, 3000);


function changeImage(next) {
    clearInterval(startInterval);
    handleChange(currentIndex, next);
    startInterval = setInterval(slideShow, 3000);
}

function slideShow() {
    handleChange(currentIndex, currentIndex + 1);
}

function handleChange(current, next) {
    [dots, sliderImages].forEach(element => {
        element[current % 3].classList.remove('active');
        element[next % 3].classList.add('active');
    })
    currentIndex = next;
}