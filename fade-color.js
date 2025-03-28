const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => { 
                entry.target.classList.add('fade-color'); 
            }, 500); // Delay of 1 second before color change
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('p.statement, p.statement-lead-in').forEach(item => {
    observer.observe(item);
});
