// Theme Toggle
// Scroll to top functionality
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Rating functionality
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.rating i');
    stars.forEach((star, index) => {
        star.addEventListener('click', function() {
            const rating = index + 1;
            stars.forEach((s, i) => {
                if (i < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });
});

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '☀️';
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('themeToggle');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '☀️';
    }
});

// AI Chatbot functionality
const pakistanKnowledge = {
    cities: {
        lahore: "Lahore is the cultural heart of Pakistan, known for Badshahi Mosque, Lahore Fort, and delicious food like Lahori Karahi.",
        karachi: "Karachi is Pakistan's largest city and economic hub, famous for Clifton Beach, Quaid-e-Azam Mausoleum, and seafood.",
        islamabad: "Islamabad is Pakistan's capital city, known for Faisal Mosque, modern architecture, and beautiful hills.",
        peshawar: "Peshawar is the gateway to Khyber Pass, famous for Qissa Khwani Bazaar, Pashtun culture, and traditional food.",
        multan: "Multan is the City of Saints, known for Sufi shrines, Shah Rukn-e-Alam tomb, and spiritual heritage.",
        quetta: "Quetta is the Fruit Garden of Pakistan, famous for its orchards, Balochi culture, and mountain scenery."
    },
    food: "Pakistani cuisine includes biryani, karahi, nihari, kebabs, and regional specialties like Sindhi curry and Balochi sajji.",
    culture: "Pakistan has diverse cultures including Punjabi, Sindhi, Pashtun, Balochi, and Siraiki traditions with rich music, dance, and festivals.",
    travel: "Best time to visit Pakistan is October to March. Don't miss historical sites, mountain regions, and cultural festivals."
};

function toggleChatbot() {
    const modal = document.getElementById('chatbotModal');
    modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    if (!message) return;
    
    addMessage(message, 'user');
    input.value = '';
    
    setTimeout(() => {
        const response = generateResponse(message);
        addMessage(response, 'bot');
    }, 500);
}

function addMessage(message, sender) {
    const messagesDiv = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageDiv.innerHTML = `<strong>${sender === 'user' ? 'You' : 'Bot'}:</strong> ${message}`;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function generateResponse(message) {
    const msg = message.toLowerCase();
    
    // City-specific responses
    for (const [city, info] of Object.entries(pakistanKnowledge.cities)) {
        if (msg.includes(city)) {
            return info;
        }
    }
    
    // Topic-specific responses
    if (msg.includes('food') || msg.includes('eat') || msg.includes('cuisine')) {
        return pakistanKnowledge.food;
    }
    
    if (msg.includes('culture') || msg.includes('tradition') || msg.includes('festival')) {
        return pakistanKnowledge.culture;
    }
    
    if (msg.includes('travel') || msg.includes('visit') || msg.includes('trip')) {
        return pakistanKnowledge.travel;
    }
    
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
        return "Hello! I'm here to help you discover Pakistan's amazing cities and culture. Ask me about Lahore, Karachi, Islamabad, or any other city!";
    }
    
    // Default response
    return "I can help you learn about Pakistan's cities (Lahore, Karachi, Islamabad, Peshawar, Multan, Quetta), food, culture, and travel tips. What would you like to know?";
}

// Existing code
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