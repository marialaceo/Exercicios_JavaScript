// Variaveis globais var

var nome = 'Herbert'
var idade = 20
var sexo = 'masculino'

console.log(nome, idade, sexo)

// Constantes const

const aluno = 'Jõao'
const nota = 6.5

console.log(aluno, nota)

// isso não pode acontecer pois constantes não podem ser modificadas durante a escrita do código
// nota = 10

// console.log(nota)

// Variáveis de escopo 

// let é usado quando precisamos de uma variável que seja exclusiva do escopo em que foi declarada

let nome1 = 'Herbert'
let idade1 = 20
let sexo1 = 'masculino'

console.log(nome1, idade1, sexo1)

sexo1 = 'nenem'

console.log(nome1, idade1, sexo1)
