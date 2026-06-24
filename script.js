// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initLoader();
    initNavigation();
    initScrollAnimations();
    initTestimonialSlider();
    initContactForm();
    initScrollToTop();
    initSmoothScrolling();
    initParallaxEffects();
});

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById('loader');
  const langPopup = document.getElementById('language-popup');
  const navLangSelect = document.getElementById('language-select');
  const savedLang = localStorage.getItem('language');

  // Always show loader
  loader.style.display = 'flex'; // Keep loader centered

  setTimeout(() => {
    loader.style.display = 'none';

    if (!savedLang) {
      // No language saved, show popup
      langPopup.style.display = 'block';
    } else {
      // Load saved language and set dropdown to match
      loadLanguage(savedLang);
      if (navLangSelect) navLangSelect.value = savedLang;
    }
  }, 2000);

  // Handle popup selection
  langPopup.addEventListener('click', (event) => {
    if (event.target.classList.contains('lang-btn')) {
      const selectedLang = event.target.getAttribute('data-lang');
      localStorage.setItem('language', selectedLang);
      loadLanguage(selectedLang);
      langPopup.style.display = 'none';

      // Sync dropdown
      if (navLangSelect) navLangSelect.value = selectedLang;
    }
  });

  // ✅ Handle dropdown language switch
  if (navLangSelect) {
    navLangSelect.addEventListener('change', (event) => {
      const selectedLang = event.target.value;
      localStorage.setItem('language', selectedLang);
      loadLanguage(selectedLang);
    });
  }
});

function loadLanguage(lang) {
  fetch(`i18n/${lang}.json`)
    .then(response => {
      if (!response.ok) throw new Error(`Could not load language file: ${lang}.json`);
      return response.json();
    })
    .then(translations => {
      applyTranslations(translations);
    })
    .catch(error => {
      console.error(error);
    });
}

function applyTranslations(translations) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key]) {
      el.textContent = translations[key];
    } else {
      console.warn(`Missing translation key: ${key}`);
    }
  });
}


document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');

    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  });



// Hamburger 
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  const container = document.getElementById('nav-container');

  // Toggle mobile menu
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  // Check if any nav item is out of visible container bounds horizontally
  function isAnyItemClipped() {
    const containerRect = container.getBoundingClientRect();
    const items = menu.querySelectorAll('.nav-link, .lang-dropdown');

    for (const item of items) {
      const itemRect = item.getBoundingClientRect();
      if (itemRect.left < containerRect.left || itemRect.right > containerRect.right) {
        return true; // overflow detected
      }
    }
    return false;
  }

  function updateNavbar() {
    if (isAnyItemClipped()) {
      toggle.style.display = 'flex';      // Show hamburger
      menu.style.display = 'none';        // Hide menu by default
      menu.classList.remove('active');    // Close mobile menu if open
    } else {
      toggle.style.display = 'none';      // Hide hamburger
      menu.style.display = 'flex';        // Show full menu
      menu.classList.remove('active');    // Ensure menu is closed
    }
  }

  // Initial check
  updateNavbar();

  // Update on window resize and orientation change
  window.addEventListener('resize', updateNavbar);
  window.addEventListener('orientationchange', updateNavbar);
});

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
  });
});

// Bottom to top button

const scrollBtn = document.getElementById('scroll-top-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {  // Show button after scrolling down 300px
    scrollBtn.classList.add('visible');
  } else {
    scrollBtn.classList.remove('visible');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



// Navigation Functionality

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

    
    // Active link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Observe all elements that should be revealed
    const revealElements = document.querySelectorAll('.section, .program-card, .coach-card, .stat-card, .wellbeing-card');
    revealElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// Testimonial Slider
function initTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    let currentSlide = 0;
    
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Show current slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });
    
    // Auto-play slider
    setInterval(nextSlide, 5000);
}

// Contact Form Handling
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message')
        };
        
        // Add loading state
        form.classList.add('form-loading');
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="btn-text">Sending...</span>';
        
        try {
            // Simulate form submission (replace with actual endpoint)
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                form.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.log('Form submission simulated (no backend endpoint)');
            // For demo purposes, show success message
            showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
            form.reset();
        } finally {
            // Remove loading state
            form.classList.remove('form-loading');
            submitBtn.innerHTML = originalText;
        }
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add notification styles if not already present
    if (!document.getElementById('notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 100px;
                right: 20px;
                background: var(--card-bg);
                border: 1px solid var(--border-color);
                border-radius: 10px;
                padding: 1rem;
                box-shadow: var(--shadow-large);
                z-index: 10000;
                transform: translateX(400px);
                transition: transform 0.3s ease;
                backdrop-filter: blur(10px);
                max-width: 400px;
            }
            
            .notification.show {
                transform: translateX(0);
            }
            
            .notification-success {
                border-left: 4px solid var(--primary-blue);
            }
            
            .notification-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }
            
            .notification-message {
                color: var(--text-white);
                font-size: 0.9rem;
            }
            
            .notification-close {
                background: none;
                border: none;
                color: var(--text-gray);
                font-size: 1.2rem;
                cursor: pointer;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .notification-close:hover {
                color: var(--text-white);
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const ctaButton = document.getElementById('book-trial-btn');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // CTA button smooth scroll to contact
    ctaButton.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        const offsetTop = contactSection.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Focus on the name input field
        setTimeout(() => {
            const nameInput = document.getElementById('name');
            nameInput.focus();
        }, 500);
    });
}

// Parallax Effects
function initParallaxEffects() {
    const philosophySection = document.querySelector('.philosophy-section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (philosophySection) {
            const philosophyBg = philosophySection.querySelector('.philosophy-background');
            if (philosophyBg) {
                philosophyBg.style.transform = `translateY(${rate}px)`;
            }
        }
    });
}

// Utility Functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Add smooth transitions to page elements
function addPageTransitions() {
    const style = document.createElement('style');
    style.textContent = `
        * {
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// Initialize page transitions
addPageTransitions();

// Performance optimizations
const debouncedScroll = debounce(() => {
    // Scroll event optimizations
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Preload critical images
function preloadImages() {
    const imagesToPreload = [
        'assets/hero-video.mp4',
        'assets/about-training.jpg',
        'assets/coach1.jpg',
        'assets/coach2.jpg',
        'assets/coach3.jpg',
        'assets/coach4.jpg',
        'assets/client1.jpg',
        'assets/client2.jpg',
        'assets/client3.jpg',
        'assets/philosophy-bg.jpg'
    ];
    
    imagesToPreload.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Preload images after page load
window.addEventListener('load', preloadImages);

// Add intersection observer for better performance
const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
});

// Observe elements for lazy loading
document.addEventListener('DOMContentLoaded', () => {
    const lazyElements = document.querySelectorAll('img, video, iframe');
    lazyElements.forEach(el => observer.observe(el));
});

// Error handling for missing elements
function safeQuerySelector(selector) {
    const element = document.querySelector(selector);
    if (!element) {
        console.warn(`Element not found: ${selector}`);
    }
    return element;
}

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initLoader,
        initNavigation,
        initScrollAnimations,
        initTestimonialSlider,
        initContactForm,
        showNotification
    };
}