function mostrarMensagem(msg, cor) {
    const div = document.getElementById('mensagemEditar');
    div.textContent = msg;
    div.style.color = cor;
}

document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form_editar');
    const inputNome = document.getElementById('nome');
    const inputEmail = document.getElementById('email');
    const inputCpf = document.getElementById('cpf');
    const inputSenha = document.getElementById('senha');

    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    inputNome.value = usuarioLogado.nome;
    inputEmail.value = usuarioLogado.email;
    inputCpf.value = usuarioLogado.cpf;
    inputSenha.value = usuarioLogado.senha;


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const novoUsuario = {
            nome: inputNome.value,
            email: inputEmail.value,
            cpf: inputCpf.value,
            senha: inputSenha.value
        }

        const index = listaUsuarios.findIndex(u => u.email === usuarioLogado.email);
        if (index !== -1) {
            listaUsuarios[index] = novoUsuario;

            localStorage.setItem('usuarioLogado', JSON.stringify(novoUsuario));
            localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));

            mostrarMensagem('Dados atualizados com sucesso!', 'green');

            setTimeout(() => {
                window.location.href = '../pages/dados-conta.html';
            }, 1500);
        } else {

            mostrarMensagem('Erro! Dados não atualizados.', 'red');
        }

    });

});
