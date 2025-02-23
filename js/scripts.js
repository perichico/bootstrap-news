// Inicializar el carrusel de Bootstrap (Opcional)
document.addEventListener('DOMContentLoaded', function () {
    let myCarousel = new bootstrap.Carousel(document.querySelector('#noticiasCarousel'), {
        interval: 3000,
        wrap: true
    });
});
