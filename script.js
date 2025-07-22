// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });
});

// Sticky Header on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Animate progress bars when skills section comes into view
const skillsSection = document.querySelector('#skills');
const progressBars = document.querySelectorAll('.progress');

function animateProgressBars() {
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 100);
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

if (skillsSection) {
    observer.observe(skillsSection);
}
