angular.module('appEscola', [])
.controller('AppController', function($scope) {
  $scope.mensagem = "System cadastro escolar";
})

.controller('ListaUsuariosController', function($scope) {
  $scope.usuarios = [
    { nome: "João", tipo: "Aluno", dataCadastro: new Date("2024-01-10") },
    { nome: "Maria", tipo: "Professor", dataCadastro: new Date("2023-11-05") },
    { nome: "Carlos", tipo: "Aluno", dataCadastro: new Date("2024-03-18") },
    { nome: "Fernanda", tipo: "Professor", dataCadastro: new Date("2022-09-22") },
    { nome: "Lucas", tipo: "Aluno", dataCadastro: new Date("2024-04-12") }
  ];


});
