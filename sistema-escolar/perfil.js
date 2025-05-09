const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado"));

if (!usuarioLogado) {
  
    window.location.href = "index.html";
}


let usuario;
if (usuarioLogado.turma) {
    usuario = new Aluno(usuarioLogado.nome, usuarioLogado.email, usuarioLogado.senha, usuarioLogado.turma);
} else if (usuarioLogado.materias) {
    usuario = new Professor(usuarioLogado.nome, usuarioLogado.email, usuarioLogado.senha, usuarioLogado.materias);
} else {
    usuario = new Usuario(usuarioLogado.nome, usuarioLogado.email, usuarioLogado.senha);
}


document.getElementById("perfil").innerHTML = usuario.exibirPerfil();
