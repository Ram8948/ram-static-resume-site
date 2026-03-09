// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Scroll progress bar logic
    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        const progressBar = document.querySelector('.scroll-progress');
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
    });

    // Reveal on scroll animation
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.reveal-v3, .card-v3, .timeline-entry, .hero-content, .avatar-wrapper');
    elementsToReveal.forEach(el => {
        el.classList.add('reveal-v3'); // Ensure class is present
        observer.observe(el);
    });

    // Navbar transparency logic
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 11, 16, 0.95)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.background = 'rgba(10, 11, 16, 0.85)';
            navbar.style.padding = '15px 0';
        }
    });

    // Interactive floating stats on mouse move (Subtle tilt effect)
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        heroVisual.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const moveX = (clientX - centerX) / 40;
            const moveY = (clientY - centerY) / 40;

            const avatarWrapper = document.querySelector('.avatar-wrapper');
            if (avatarWrapper) {
                avatarWrapper.style.transform = `rotateY(${moveX}deg) rotateX(${-moveY}deg)`;
            }
        });
    }
});
