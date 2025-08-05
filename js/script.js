// Smooth scrolling for navigation links
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

// Form submissions
document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Simulate form submission
    const successMsg = document.getElementById('userSuccess');
    successMsg.style.display = 'block';
    this.reset();

    // In a real implementation, you would send this data to your backend
    console.log('User signup:', new FormData(this));
});

document.getElementById('businessForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Simulate form submission
    const successMsg = document.getElementById('businessSuccess');
    successMsg.style.display = 'block';
    this.reset();

    // In a real implementation, you would send this data to your backend
    console.log('Business signup:', new FormData(this));
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
});
document.addEventListener('scroll', function() {
    const parallaxImages = document.querySelectorAll('.laundry-image');
    const speed = -0.2; // Adjust this value to make the effect more or less dramatic

    for (let i = 0; i < parallaxImages.length; i++) {
        const image = parallaxImages[i];
        const rect = image.parentElement.getBoundingClientRect();

        // Check if the showcase is in the viewport
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            const yPos = rect.top * speed;
            image.style.transform = `translateY(${yPos}px)`;
        }
    }
});