function showMonth(monthId, buttonEl) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(monthId).classList.add('active');
    if (buttonEl) buttonEl.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    // Footer-Datum
    const currentDateEl = document.getElementById('currentDate');
    if (currentDateEl) {
        currentDateEl.textContent = new Date().toLocaleDateString('de-DE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Row-Hover
    document.querySelectorAll('tbody tr').forEach(row => {
        row.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.01)';
        });
        row.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Aktuellen Monat automatisch öffnen
    const monthMap = {
        2: 'feb',
        3: 'mar',
        4: 'apr',
        5: 'mai',
        6: 'jun',
        7: 'jul',
    };

    const targetId = monthMap[new Date().getMonth() + 1];
    const targetBtn = [...document.querySelectorAll('.tab-button')].find(btn =>
        btn.getAttribute('onclick')?.includes(`'${targetId}'`)
    );

    if (targetId && document.getElementById(targetId)) {
        showMonth(targetId, targetBtn || null);
    } else {
        const firstBtn = document.querySelector('.tab-button');
        if (firstBtn) {
            const firstId = firstBtn.getAttribute('onclick').match(/'(\w+)'/)[1];
            showMonth(firstId, firstBtn);
        }
    }
});