// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Card Animation
const animateBtn = document.getElementById('animateCards');
const cityCards = document.querySelectorAll('.city-card');

// Initial animation on page load
window.addEventListener('load', () => {
    cityCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate');
        }, index * 100);
    });
});

// Manual animation trigger
if (animateBtn) {
    animateBtn.addEventListener('click', () => {
        cityCards.forEach((card, index) => {
            card.classList.remove('animate');
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 100);
        });
    });
}