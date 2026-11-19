if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.classList.replace('reveal-pending', 'is-revealed');
                observer.unobserve(entry.target);
            }
        }
    }, { threshold: 0.05 });

    for (const section of document.querySelectorAll('[data-reveal]')) {
        if (section.getBoundingClientRect().top >= window.innerHeight) {
            section.classList.add('reveal-pending');
            observer.observe(section);
        }
    }
}
