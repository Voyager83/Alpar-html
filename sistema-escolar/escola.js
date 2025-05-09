
class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    exibirPerfil() {
        return `
            <div class="card shadow p-4">
                <h2>${this.nome}</h2>
                <p><strong>Email:</strong> ${this.email}</p>
            </div>
        `;
    }
}


class Aluno extends Usuario {
    constructor(nome, email, senha, turma) {
        super(nome, email, senha);
        this.turma = turma;
    }

    exibirPerfil() {
        return `
            <div class="card shadow p-4">
                <h2>${this.nome} (Aluno)</h2>
                <p><strong>Email:</strong> ${this.email}</p>
                <p><strong>Turma:</strong> ${this.turma}</p>
            </div>
        `;
    }
}


class Professor extends Usuario {
    constructor(nome, email, senha, materias) {
        super(nome, email, senha);
        this.materias = materias;
    }

    exibirPerfil() {
        return `
            <div class="card shadow p-4">
                <h2>${this.nome} (Professor)</h2>
                <p><strong>Email:</strong> ${this.email}</p>
                <p><strong>Matérias:</strong> ${this.materias.join(', ')}</p>
            </div>
        `;
    }
}
