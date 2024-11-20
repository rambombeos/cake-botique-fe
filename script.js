document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Add scroll event listener
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const menuToggleSpans = document.querySelectorAll('.menu-toggle span');
    
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        // Reduce opacity of nav links and menu toggle
        navLinks.forEach(link => link.style.opacity = '0.5');
        menuToggleSpans.forEach(span => span.style.opacity = '0.5');
    } else {
        header.classList.remove('scrolled');
        // Restore full opacity
        navLinks.forEach(link => link.style.opacity = '1');
        menuToggleSpans.forEach(span => span.style.opacity = '1');
    }
});
