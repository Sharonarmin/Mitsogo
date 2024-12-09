const burgerBtn = document.querySelector('.burger-btn');
const navbarList = document.querySelector('.navbar__list');

burgerBtn.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevents the event from bubbling up to the document
    navbarList.classList.toggle('active');
});

// Add a click event listener to the document
document.addEventListener('click', (event) => {
    // Check if the click happened outside the navbar and burger button
    if (!navbarList.contains(event.target) && !burgerBtn.contains(event.target)) {
        navbarList.classList.remove('active');
    }
});
