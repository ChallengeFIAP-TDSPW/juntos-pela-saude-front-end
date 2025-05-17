function mostrarMensagem (msg, cor){
    const div = document.getElementById('mensagemContato');
    div.textContent = msg;
    div.style.color = cor;
}

document.getElementById('form_contato').addEventListener('submit', function(e)  {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const cpf = document.getElementById('cpf').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !cpf || !mensagem ) {
        mostrarMensagem('Por favor, preencha todos os campos.', 'red');
        return;
    }

    mostrarMensagem('Formulário enviado com sucesso!' , 'green');
    this.reset();

});