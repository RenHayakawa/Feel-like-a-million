const menuButtons = document.querySelectorAll('.self-actualization__text');

const toggleList = (index) => {
    const list = document.querySelectorAll('.self-actualization__list')[index];

    list.classList.toggle('close');
};

const addButtonListener = (button, index) => {
    button.addEventListener('click', () => toggleList(index));
};

menuButtons.forEach(addButtonListener);


const slider = document.querySelector('.slider__img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

updateSlider();