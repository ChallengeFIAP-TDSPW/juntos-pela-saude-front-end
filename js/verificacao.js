function getUsuarioLogado(){
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
    return usuarioLogado; 
}

document.getElementById('btn_user').addEventListener('click', () => {

    const usuarioLogado = getUsuarioLogado();

    if (usuarioLogado == null){
        alert('Ops! Parece que você ainda não está logado. Faça login para continuar.')
        window.location.href = '../pages/login.html';
        return;
    }

    window.location.href = '/pages/dados-conta.html';

});

