"use strict";
// Boolean
const contaPaga = false;
// Number
const idade = 23;
// String
const nome = "Bruno";
// Array
const idades = [23, 28, 32, 45];
const idades2 = [23, 28, 32, 45];
// Tuple
let jogadores;
jogadores = ["Bruno", 3, "front", true];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
const statusDaAprovacao = StatusAprovacao.Aprovado;
// Any (Não usar)
const retornoDaAPI = [123, "Vitor", false];
const retornoDaAPI2 = {
//......
};
// Void (Pouco usado)
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
const n = null;
const u = undefined;
//Object
function criar(objecto) {
    //....
}
criar({
    propiedade: 1
});
// criar("Bruno") // Dá erro
//Never (Pouco usado)
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo Falhou');
}
// Union Types (Mais de 1 tipo para o elemento)
const nota = 5;
function exibirNota(nota) {
    console.log(`Anota é ${nota}`);
}
exibirNota("10");
exibirNota(10);
const funcionarios = [{
        nome: "Bruno",
        sobreNome: "Andrade"
    }];
function tratarFuncionarios(funcionarios) {
    for (let funcionario of funcionarios) {
        console.log("Nome do funcionário: ", funcionario.nome);
    }
}
