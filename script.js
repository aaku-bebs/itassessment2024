document.addEventListener('DOMContentLoaded', function() {
    // Filter buttons functionality for all pages
    const filterButtons = document.querySelectorAll('.filter-group .filter-button');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const category = this.textContent.toLowerCase();
                // Special handling for 'all' category on the all.html page
                if (window.location.pathname.includes('all.html')) {
                    if (category !== 'all') {
                        window.location.href = category + '.html';
                    }
                } else {
                    window.location.href = category + '.html';
                }
            });
        });
    }
});
