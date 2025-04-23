class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    exibirPerfil() {
        return `Nome: ${this.nome}<br>Email: ${this.email}`;
    }
}


class Aluno extends Usuario {
    constructor(nome, email, senha, turma) {
        super(nome, email, senha);
        this.turma = turma;
    }

    exibirPerfil() {
        return `${super.exibirPerfil()}<br>Turma: ${this.turma}`;
    }
}


class Professor extends Usuario {
    constructor(nome, email, senha, materias) {
        super(nome, email, senha);
        this.materias = materias;
    }

    exibirPerfil() {
        return `${super.exibirPerfil()}<br>Matérias: ${this.materias.join(", ")}`;
    }
}


