// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');
const overlay = document.getElementById('overlay');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);
closeMenuBtn.addEventListener('click', toggleMobileMenu);
overlay.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
        toggleMobileMenu();
    });
});

// Typed.js for multiple text animation
var typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'UI/UX Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Modal functionality
function showModal(title, description) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

function toggleMore(button) {
    const moreDiv = button.nextElementSibling;
    if (moreDiv.classList.contains('hidden')) {
        moreDiv.classList.remove('hidden');
        button.textContent = 'Read Less';
    } else {
        moreDiv.classList.add('hidden');
        button.textContent = 'Read More';
    }
}