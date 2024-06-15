const menuButtons = document.querySelectorAll('.self-actualization__text');

const toggleList = (index) => {
    const list = document.querySelectorAll('.self-actualization__list')[index];

    list.classList.toggle('close');
};

const addButtonListener = (button, index) => {
    button.addEventListener('click', () => toggleList(index));
};

menuButtons.forEach(addButtonListener);
