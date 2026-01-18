// Theme Toggle
// Scroll to top functionality
const scrollToTopBtn = document.getElementById('scrollToTop');

if (scrollToTopBtn) {
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
}

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

// Theme toggle functionality (FIXED - Single implementation)
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');
    
    if (!themeToggle) return;
    
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
    
    if (themeToggle && savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '☀️';
    }
});

// Statistics Counter Animation (NEW)
document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.stats-counter-section');
    if (!statsSection) return;
    
    const statNumbers = statsSection.querySelectorAll('.stat-number');
    let animated = false;

    // Function to animate counter
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current) + '+';
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '+';
            }
        };

        updateCounter();
    }

    // Intersection Observer for scroll detection
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                statNumbers.forEach(stat => {
                    animateCounter(stat);
                });
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of section is visible
    });

    // Observe the stats section
    observer.observe(statsSection);
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
    if (modal) {
        modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
    }
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

// Card Animation
const animateBtn = document.getElementById('animateCards');
const cityCards = document.querySelectorAll('.city-card');

// Initial animation on page load
window.addEventListener('load', () => {
    if (cityCards.length > 0) {
        cityCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 100);
        });
    }
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

// ========== STAR RATING FUNCTIONALITY ==========
document.addEventListener('DOMContentLoaded', function() {
    const starRating = document.getElementById('starRating');
    const ratingValue = document.getElementById('ratingValue');
    
    if (starRating && ratingValue) {
        const stars = starRating.querySelectorAll('i');
        
        stars.forEach((star, index) => {
            star.addEventListener('click', function() {
                const rating = this.getAttribute('data-rating');
                ratingValue.value = rating;
                
                // Update star display
                stars.forEach((s, i) => {
                    if (i < rating) {
                        s.classList.remove('far');
                        s.classList.add('fas', 'active');
                    } else {
                        s.classList.remove('fas', 'active');
                        s.classList.add('far');
                    }
                });
            });
            
            // Hover effect
            star.addEventListener('mouseenter', function() {
                const rating = this.getAttribute('data-rating');
                stars.forEach((s, i) => {
                    if (i < rating) {
                        s.classList.add('fas');
                        s.classList.remove('far');
                    } else {
                        s.classList.add('far');
                        s.classList.remove('fas');
                    }
                });
            });
        });
        
        // Reset on mouse leave
        starRating.addEventListener('mouseleave', function() {
            const currentRating = ratingValue.value;
            stars.forEach((s, i) => {
                if (i < currentRating) {
                    s.classList.add('fas', 'active');
                    s.classList.remove('far');
                } else {
                    s.classList.add('far');
                    s.classList.remove('fas', 'active');
                }
            });
        });
    }
});

// ========== REVIEW FORM SUBMISSION ==========
document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const reviewSuccessMessage = document.getElementById('reviewSuccessMessage');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('reviewName').value.trim();
            const email = document.getElementById('reviewEmail').value.trim();
            const city = document.getElementById('cityVisited').value;
            const rating = document.getElementById('ratingValue').value;
            const reviewText = document.getElementById('reviewText').value.trim();
            
            // Validate rating
            if (rating === '0' || rating === '') {
                alert('Please select a rating!');
                return;
            }
            
            // Show success message
            reviewSuccessMessage.classList.remove('d-none');
            reviewSuccessMessage.classList.add('show-message');
            
            // Log the review data (in production, send to server)
            console.log('Review Submitted:', {
                name: name,
                email: email,
                city: city,
                rating: rating,
                review: reviewText
            });
            
            // Reset form
            reviewForm.reset();
            
            // Reset star rating
            const stars = document.querySelectorAll('#starRating i');
            stars.forEach(star => {
                star.classList.remove('fas', 'active');
                star.classList.add('far');
            });
            document.getElementById('ratingValue').value = '0';
            
            // Scroll to success message
            reviewSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                reviewSuccessMessage.classList.add('d-none');
                reviewSuccessMessage.classList.remove('show-message');
            }, 5000);
        });
    }
});

// ========== NEWSLETTER SUBSCRIPTION ==========
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const newsletterSuccessMessage = document.getElementById('newsletterSuccessMessage');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get email value
            const email = emailInput.value.trim();
            
            // Validate email
            if (!email || !isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Show success message
            newsletterSuccessMessage.classList.remove('d-none');
            newsletterSuccessMessage.classList.add('show-message');
            
            // Log the subscription (in production, send to server)
            console.log('Newsletter Subscription:', email);
            
            // Reset form
            newsletterForm.reset();
            
            // Scroll to success message
            newsletterSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                newsletterSuccessMessage.classList.add('d-none');
                newsletterSuccessMessage.classList.remove('show-message');
            }, 5000);
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
