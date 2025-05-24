function getUsuarios() {
    const usuariosJSON = localStorage.getItem('usuarios');
    return usuariosJSON ? JSON.parse(usuariosJSON) : [];
}

function getUsuarioLogado() {
    return JSON.parse(localStorage.getItem('usuarioLogado'));
}

function salvarUsuarios(usuarios) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

const usuario = getUsuarioLogado();

document.getElementById('nome_usuario').textContent = usuario.nome;
document.getElementById('email_usuario').textContent = usuario.email;
document.getElementById('cpf_usuario').textContent = usuario.cpf;
document.getElementById('senha_usuario').textContent = '*'.repeat(usuario.senha.length);


document.getElementById('btn_editar').addEventListener('click', () => {
    window.location.href = '../pages/editar-dados.html';
});

document.getElementById('btn_excluir').addEventListener('click', () => {
    const usuarios = getUsuarios();

    if (confirm('Tem certeza que deseja excluir essa conta?')) {

        const index = usuarios.findIndex(u => u.email === usuario.email);
        if (index == -1) {
            alert('Erro ao excluir');
            return;
        }

        usuarios.splice(index, 1);
        salvarUsuarios(usuarios);
        localStorage.removeItem('usuarioLogado');
        window.location.href = '../index.html';

    } else {
        return;
    }
});


document.getElementById('btn_logout').addEventListener('click', () => {
    if (confirm('Tem certeza que deseja sair dessa conta?')) {
        localStorage.removeItem('usuarioLogado');
        window.location.href = '../index.html';
    }
});




