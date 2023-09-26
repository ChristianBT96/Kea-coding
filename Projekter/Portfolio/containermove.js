const containers = document.querySelectorAll('.about_small, .about_large');

containers.forEach(about_small => {
    about_small.addEventListener('mouseover', () => {
        about_small.style.transform = 'translateY(-5px)';
    });

    about_small.addEventListener('mouseout', () => {
        about_small.style.transform = 'translateY(0)';
    });
});
