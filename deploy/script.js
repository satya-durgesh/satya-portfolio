// ===== DOM ELEMENTS =====
const loadingScreen = document.getElementById('loadingScreen');
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');

// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== MOBILE MENU TOGGLE =====
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== SKILL BARS ANIMATION =====
const animateSkillBars = () => {
    const skillBars = document.querySelectorAll('.skill-fill');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                skillBar.style.width = width + '%';
                observer.unobserve(skillBar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => observer.observe(bar));
};

// Initialize skill bar animation
animateSkillBars();

// ===== FADE IN ANIMATIONS ON SCROLL =====
const fadeInOnScroll = () => {
    const elements = document.querySelectorAll('.section, .project-card, .timeline-item, .highlight-item');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('fade-in-up');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elements.forEach(element => observer.observe(element));
};

fadeInOnScroll();

// ===== CONTACT FORM HANDLING =====
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;

        // Show success message
        const submitButton = contactForm.querySelector('.btn-primary');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'SENDING...';
        submitButton.disabled = true;

        // Simulate sending (replace with actual form submission logic)
        setTimeout(() => {
            submitButton.textContent = 'MESSAGE SENT ✓';
            submitButton.style.background = '#00FF00';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.background = '';
            }, 3000);
        }, 1500);

        // Here you would typically send the data to your backend
        console.log('Form Data:', { name, email, subject, message });
    });
}

// ===== PARALLAX EFFECT FOR HERO SECTION =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / 800);
    }
});

// ===== ACTIVE NAVIGATION LINK HIGHLIGHTING =====
const updateActiveNavLink = () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', updateActiveNavLink);
updateActiveNavLink();

// ===== DYNAMIC TYPING EFFECT FOR HERO (OPTIONAL) =====
const typeWriter = (element, text, speed = 100) => {
    let i = 0;
    element.textContent = '';
    
    const type = () => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    };
    
    type();
};

// Uncomment to enable typing effect for hero subtitle
// const heroSubtitle = document.querySelector('.hero-subtitle');
// if (heroSubtitle) {
//     setTimeout(() => {
//         typeWriter(heroSubtitle, 'Full Stack Developer', 80);
//     }, 2000);
// }

// ===== RANDOM PARTICLES EFFECT (BONUS) =====
const createParticle = () => {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: var(--primary-red);
        pointer-events: none;
        border-radius: 50%;
        opacity: 0;
        animation: float 5s ease-in-out infinite;
        left: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * 5}s;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 5000);
};

// Create particles periodically
// setInterval(createParticle, 1000);

// Add particle animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== PERFORMANCE OPTIMIZATION =====
// Debounce function for scroll events
const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Apply debounce to scroll-heavy functions
const optimizedScrollHandler = debounce(() => {
    updateActiveNavLink();
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

// ===== CONSOLE MESSAGE =====
console.log('%c🏎️ Welcome to the F1 Portfolio! 🏎️', 'color: #E10600; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped with passion for excellence', 'color: #FFD700; font-size: 12px;');

// ===== RACE TIMER (BONUS) =====
const startRaceTimer = () => {
    const timerElement = document.createElement('div');
    timerElement.id = 'race-timer';
    timerElement.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(10, 10, 10, 0.9);
        border: 2px solid var(--primary-red);
        padding: 15px 20px;
        font-family: var(--font-accent);
        font-size: 1.5rem;
        font-weight: 900;
        color: var(--primary-red);
        z-index: 1000;
        letter-spacing: 2px;
    `;
    
    let seconds = 0;
    const updateTimer = () => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        seconds++;
    };
    
    updateTimer();
    setInterval(updateTimer, 1000);
    
    document.body.appendChild(timerElement);
};

// Uncomment to show race timer
// startRaceTimer();

