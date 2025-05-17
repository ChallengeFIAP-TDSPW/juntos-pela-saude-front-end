function getUsuarios(){
    const usuariosJSON = localStorage.getItem('usuarios');
    return usuariosJSON ? JSON.parse(usuariosJSON) : []; 
}

function salvarUsuarios(usuarios){
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function mostrarMensagem (msg, cor){
    const div = document.getElementById('mensagem');
    div.textContent = msg;
    div.style.color = cor;
}

// Cadastro 
const formCadastro = document.getElementById('form_cadastro');
if (formCadastro) {
    formCadastro.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const cpf = document.getElementById('cpf').value;
        const senha = document.getElementById('senha').value;
        const confirmaSenha = document.getElementById('confirma_senha').value;

        if (!nome || !email || !cpf || !senha || !confirmaSenha) {
            mostrarMensagem('Por favor, preencha todos os campos.', 'red');
            return;
        }

        const usuarios = getUsuarios();

        const existe = usuarios.some(user => user.email === email);
        const cpfExiste = usuarios.some(user => user.cpf === cpf);

        if (existe) {
            mostrarMensagem('Email já cadastrado!', 'red');
            return;
        }

        if (cpfExiste){
            mostrarMensagem('CPF já cadastrado!', 'red');
            return;
        }

        if (confirmaSenha === senha) {
            usuarios.push({ nome, email, cpf, senha });
            salvarUsuarios(usuarios);

            mostrarMensagem('Cadastro realizado com sucesso!', 'green');
            formCadastro.reset();

            setTimeout(() => {
                window.location.href = '../pages/login.html';
            }, 1500);

        } else {
            mostrarMensagem('As senhas não coincidem. Por favor, verifique.', 'red');
        }
    });
}

// Login
const formLogin = document.getElementById('form_login');
if (formLogin) {
    formLogin.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        const usuarios = getUsuarios();

        const usuario = usuarios.find(user => user.email === email);

        if (!usuario) {
            mostrarMensagem('Email não cadastrado!', 'red');
            formLogin.reset();
            
        } else if (usuario.senha === senha) {
            mostrarMensagem('Login realizado com sucesso!', 'green');
            formLogin.reset();

            localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

            setTimeout(() => {
                window.location.href = '../index.html';
            }, 1500);

        } else {
            mostrarMensagem('Senha incorreta!', 'red');
        }

    });
}

console.log('usuario logado: ', localStorage.getItem('usuarioLogado'));
