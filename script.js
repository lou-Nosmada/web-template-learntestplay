document.addEventListener("DOMContentLoaded", () => {
    const observer = new Intersection Observer((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.25,
        rootMargin: "-50%"
    });

    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
});
