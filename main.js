const sections = document.querySelectorAll('.section');

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    sections.forEach((section) => {
        if (isElementInViewport(section)) {
            const background = section.querySelector('.bg-transition');
            background.style.left = '0'; // Mueve el fondo a la posición deseada
        }
    });
}

window.addEventListener('scroll', handleScroll);
