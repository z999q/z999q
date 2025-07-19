document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Typed.js for hero text animation
    new Typed('.hero-text', {
        strings: ['Look Your Future', 'See Tomorrow Today'],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    // Hide preloader after page load
    window.addEventListener('load', function () {
        document.getElementById('preloader').style.display = 'none';
    });

    // Smooth scroll for navbar links
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Scroll progress bar
    window.addEventListener('scroll', function () {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        document.getElementById('progress-bar').style.width = scrollPercent + '%';
    });
});

// Toggle hamburger menu
function toggleMenu() {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
}
