document.addEventListener('DOMContentLoaded', () => {
    
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 120
    });

    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-links a');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-bars');
            if(icon) icon.classList.add('fa-bars');
        });
    });

    const navbar = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 38, 46, 0.98)';
            navbar.style.padding = '10px 0';
            navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
        } else {
            navbar.style.backgroundColor = 'rgba(0, 59, 70, 0.9)';
            navbar.style.padding = '15px 0';
            navbar.style.boxShadow = 'none';
        }
    });
});