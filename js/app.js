'use strict'

$(document).ready(function () {
    // Detectar si es dispositivo táctil
    const esTactil = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (esTactil) {
        $('#cursor').hide(); // Ocultar el cursor personalizado
        $('body').css('cursor', 'auto'); // Restaurar el cursor por defecto
        return; // Salir de la función
    }

    // Solo se ejecuta en ordenadores (no táctiles)
    $('body').on({
        'mousemove': function (e) {
            let clienteX = e.originalEvent.clientX;
            let clienteY = e.originalEvent.clientY;
            $('#cursor').css({
                'left': (clienteX - 40) + 'px',
                'top': (clienteY - 40) + 'px'
            });
        }
    });

    $('.a').on({
        'mouseover': function () {
            $('#cursor').addClass('mini');
        },
        'mouseout': function () {
            $('#cursor').removeClass('mini');
        },
    });
});
