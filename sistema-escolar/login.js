const usuarios = [
    new Aluno("nicollas", "teste@aaaaa.com", "12s3456", "1A"),
    new Professor("nicao", "nicaoa@bbbb.com", "asdfgh", ["GEO", "Artes"]),
];


function login() {
    const emailInput = document.getElementById("email").value;
    const senhaInput = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    const usuario = usuarios.find(user => user.email === emailInput && user.senha === senhaInput);

    if (usuario) {
        localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
        window.location.href = "perfil.html";
    } else {
        erro.innerText = "Email ou senha incorretos.";
    }
}
