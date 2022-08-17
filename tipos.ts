// Boolean
const contaPaga: boolean = false

// Number
const idade: number = 23

// String
const nome: string = "Bruno"

// Array
const idades: number[] = [23, 28, 32, 45]
const idades2: Array<number> = [23, 28, 32, 45]

// Tuple
let jogadores: [string, number, string, boolean]
jogadores = ["Bruno", 3, "front", true]

// Enum
enum StatusAprovacao {
    Aprovado = "001",
    Pendente = "002",
    Rejeitado = "003"
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado

// Any (Não usar)
const retornoDaAPI: any[]=[123, "Vitor", false]
const retornoDaAPI2: any = {
    //......
}

// Void (Pouco usado)
function printarNaTela(msg:string): void{
    console.log(msg)
}

// Null e Undefined
const n: null = null
const u: undefined = undefined

//Object
function criar(objecto: object) {
    //....
}
criar({
    propiedade: 1
})
// criar("Bruno") // Dá erro


//Never (Pouco usado)
function loopInfinito(): never{
    while(true) {}
}

function erro(mensagem: string): never{
    throw new Error(mensagem)
}

function falha(){
    return erro('Algo Falhou')
}

// Union Types (Mais de 1 tipo para o elemento)
const nota: string | number = 5
function exibirNota(nota: number | string) {
    console.log(`Anota é ${nota}`)
}

exibirNota("10")
exibirNota(10)


// Alias 

type Funcionario = {
    nome: string,
    sobreNome: string
}

const funcionarios: Funcionario[] =[{
    nome: "Bruno",
    sobreNome: "Andrade"
}]

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log("Nome do funcionário: ", funcionario.nome)
    }
}

// Valores nulos ou opcionais(?)

type Contato = {
    nome: string,
    telefone1: string,
    telefone2?: string
}

const contato: Contato ={
    nome: "Bruno",
    telefone1: "13213"

}

