document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const header = item.querySelector('.timeline-header');
        header.addEventListener('click', () => {
            // Cierra todos los otros elementos abiertos
            timelineItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Alterna la clase 'active' en el elemento clickeado
            item.classList.toggle('active');
        });
    });
});
