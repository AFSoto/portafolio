document.addEventListener("DOMContentLoaded", function() {
    // 1. Seleccionamos todos los enlaces con la clase .nav-link
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
        link.addEventListener('click', function() {
            // 2. Quitamos la clase 'active' de todos
            links.forEach(l => l.classList.remove('active'));
            
            // 3. Se la ponemos al que clicamos
            this.classList.add('active');
        });
    });
});