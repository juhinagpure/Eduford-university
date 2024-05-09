document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function handleScroll() {
        sections.forEach(section => {
            if (isInViewport(section) && !section.classList.contains('reveal')) {
                section.classList.add('reveal');
            }
        });
    }

    // Initial check on page load
    handleScroll();

    // Event listener for scroll
    window.addEventListener('scroll', handleScroll);
});