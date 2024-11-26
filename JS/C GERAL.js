let counting = null;

// Evento de clique no botão de download
$('.buttonContainer').click(function () {
    const button = $(this);
    const counter = $('#counter');
    const complete = $('.complete');
    const ball = $('.ball');

    if (button.hasClass('active')) {
        button.removeClass('active');
        complete.removeClass('fadein');
        counter.fadeOut(100);
        ball.fadeOut(100);
        counting && counting.stop(); // Para a animação em execução
    } else {
        button.addClass('active');
        counter.fadeIn(200).text('0%'); // Reinicia o contador visualmente
        ball.fadeIn(200);
        counting = count(counter, complete, ball, button); // Inicia a animação
    }
});

// Função de contagem para a animação de progresso
function count(counter, complete, ball, button) {
    return $({ countNum: 0 }).animate({ countNum: 100 }, {
        duration: 2500,
        easing: 'linear',
        step: function () {
            counter.text(Math.floor(this.countNum) + '%'); // Atualiza o texto
        },
        complete: function () {
            counter.fadeOut(200);
            complete.addClass('fadein');
            ball.fadeOut(200);
            setTimeout(function () {
                button.removeClass('active');
                complete.removeClass('fadein');
            }, 1000); // Redefine o estado após 1 segundo
        }
    });
}
