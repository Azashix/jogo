document.addEventListener('DOMContentLoaded', () => {
    const botoesProximo = document.querySelectorAll('.btn-proximo');

    botoesProximo.forEach(botao => {
        botao.addEventListener('click', function() {
            const passoAtual = document.querySelector('.passo.ativo');  // Encontrar o passo atual
            const proximoPassoId = this.getAttribute('data-proximo');   // Próximo passo a ir
            const proximoPassoElement = document.getElementById(proximoPassoId);  // Próximo passo (elemento)

            // Verificar se o passo atual existe antes de tentar remover a classe 'ativo'
            if (passoAtual) {
                passoAtual.classList.remove('ativo');  // Remover a classe 'ativo' do passo atual
            }

            // Verificar se o próximo passo existe
            if (proximoPassoElement) {
                proximoPassoElement.classList.add('ativo');  // Adicionar a classe 'ativo' ao próximo passo
            } else if (proximoPassoId === 'fim') {
                // Se for o passo final
                alert('Obrigado por jogar! Caso resolvido.');
            } else {
                console.error('Passo não encontrado:', proximoPassoId);  // Log de erro se o passo não for encontrado
            }
        });
    });
});