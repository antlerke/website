// ==========================================
// БАЗОВИЙ ГАРДЕРОБ - Premium Motion JS
// /polish: Final touches for luxury experience
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    // Smooth navigation
    initSmoothScroll();
    // Lazy animations
    observeElements();
    // Header effects
    headerScrollEffect();
    // Button polish
    initializeButtons();
    
    console.log('🎨 БАЗОВИЙ ГАРДЕРОБ premium site loaded');
});

// ==========================================
// Smooth Scroll Navigation
// ==========================================

function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// Intersection Observer - Lazy Animations
// ==========================================

function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.card, .benefit-item, .bonus-item, .step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s, transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s';
        observer.observe(el);
    });
}

// ==========================================
// Header Scroll Effect
// ==========================================

function headerScrollEffect() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        } else {
            header.style.boxShadow = 'none';
        }
    }, false);
}

// ==========================================
// Button Effects
// ==========================================

function initializeButtons() {
    const buttons = document.querySelectorAll('.cta-btn, .cta-btn-small');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function(e) {
            if (this.classList.contains('cta-btn-primary')) {
                this.style.boxShadow = '0 12px 32px rgba(159, 216, 212, 0.3)';
            } else {
                this.style.boxShadow = '0 4px 12px rgba(159, 216, 212, 0.2)';
            }
        });
        
        button.addEventListener('mouseleave', function(e) {
            if (this.classList.contains('cta-btn-primary')) {
                this.style.boxShadow = '0 4px 16px rgba(159, 216, 212, 0.2)';
            } else {
                this.style.boxShadow = 'none';
            }
        });
    });
}

console.log('✨ Premium fashion editorial landing page - /polish complete');
