angular.module('appEscola', [])
  .service('UsuarioService', function () {
    const usuarios = [
      { nome: "João", tipo: "Aluno", dataCadastro: new Date("2003-01-10") },
      { nome: "Maria", tipo: "Professor", dataCadastro: new Date("2099-11-05") },
      { nome: "Carl Jhonson", tipo: "Aluno", dataCadastro: new Date("1999-03-18") },
      { nome: "Fernanda", tipo: "Professor", dataCadastro: new Date("2022-09-22") },
      { nome: "Peter", tipo: "Aluno", dataCadastro: new Date("2023-04-12") }
    ];

    this.listar = function () {
      return usuarios;
    };

    this.adicionar = function (usuario) {
      usuario.dataCadastro = new Date();
      usuarios.push(usuario);
    };

    this.remover = function (index) {
      usuarios.splice(index, 1);
    };
  })

  .controller('AppController', function ($scope, UsuarioService) {
    $scope.mensagem = "Bem-vindo ao sistema de cadastro escolar";
    $scope.usuarios = UsuarioService.listar();
    $scope.novoUsuario = {};

    $scope.adicionarUsuario = function () {
      if ($scope.novoUsuario.nome && $scope.novoUsuario.tipo) {
        UsuarioService.adicionar(angular.copy($scope.novoUsuario));
        $scope.novoUsuario = {};
      }
    };

    $scope.removerUsuario = function (index) {
      UsuarioService.remover(index);
    };
  })

  .controller('ListaUsuariosController', function ($scope, UsuarioService) {
    $scope.usuarios = UsuarioService.listar();
    $scope.removerUsuario = function (index) {
      UsuarioService.remover(index);
    };
  });
