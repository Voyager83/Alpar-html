// CODIGO DE TESTES TEMPORARIO, INCOMPLETO

class CentralDeLuzes {
    constructor() {
      if (CentralDeLuzes._instancia) {
        return CentralDeLuzes._instancia;
      }
      this.estadoDasLuzes = {};
      CentralDeLuzes._instancia = this;
    }
  
    static getInstance() {
      if (!CentralDeLuzes._instancia) {
        CentralDeLuzes._instancia = new CentralDeLuzes();
      }
      return CentralDeLuzes._instancia;
    }
  
    ligar(comodo) {
      this.estadoDasLuzes[comodo] = true;
      const div = document.getElementById(comodo);
      if (div) {
        div.classList.add("ligado");
      }
      this._mostrarStatus(`Luz do ${comodo} ligada`);
    }
  
    desligar(comodo) {
      this.estadoDasLuzes[comodo] = false;
      const div = document.getElementById(comodo);
      if (div) {
        div.classList.remove("ligado");
      }
      this._mostrarStatus(`Luz do ${comodo} desligada`);
    }
  
    _mostrarStatus(mensagem) {
      document.getElementById("status").textContent = mensagem;
    }
  }
  
  
  document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll("button[data-comodo]");
    const central = CentralDeLuzes.getInstance();
  
    botoes.forEach(botao => {
      botao.addEventListener("click", function () {
        const comodo = this.dataset.comodo;
        const acao = this.dataset.acao;
  
        if (acao === "ligar") {
          central.ligar(comodo);
        } else if (acao === "desligar") {
          central.desligar(comodo);
        }
      });
    });
  });
  