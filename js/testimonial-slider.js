const testimonialItems = document.querySelectorAll('.testimonial-slider__item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

function showTestimonial(index) {
    testimonialItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
    showTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonialItems.length;
    showTestimonial(currentIndex);
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonialItems.length;
    showTestimonial(currentIndex);
}, 115000);