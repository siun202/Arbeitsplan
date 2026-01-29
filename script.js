// Set the current date in the footer (German format)
document.addEventListener('DOMContentLoaded', function () {
    const currentDateEl = document.getElementById('currentDate');
    if (currentDateEl) {
        currentDateEl.textContent = new Date().toLocaleDateString('de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Optional: subtle scaling on row hover for browsers that may not pick up CSS transform
    // This duplicates the CSS hover but ensures consistent behavior in some contexts.
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        row.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.01)';
        });
        row.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
});