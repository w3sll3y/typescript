// let & const
let seraQuePode = "?";
console.log(seraQuePode);

let estaFrio = true

if (estaFrio) {
  let acao = "Colocar o casaco!"
  console.log(acao)
}

const cpf: string = "12312312321";
// cpf = "dwqdqwd"
console.log(cpf);

var segredo = "externo"
function revelar() {
  var segredo = "interno"
  console.log(segredo)
}

revelar()
console.log(segredo)

{
  {
    const def = "def";
    console.log(def)
  }
}

for (let i = 0; i < 10; i++) {
  console.log(i)
}
// console.log(i)

// Arrow Function
function somar(n1: number, n2: number): number {
  return n1 + n2;
}
console.log(somar(2, 2));

const subtrair = (n1: number, n2: number) => n1 - n2;
console.log(subtrair(2, 3));

const saudacao = () => console.log("Ola")
saudacao()

const falarCom = (pessoa: string) => console.log(`Ola ${pessoa}`)
falarCom("Joao")

// this

// function normalComThis() {
//   console.log(this)
// }
// normalComThis()

// const normalComThisEspecial = normalComThis
//   .bind({ nome: "Ana" })
// normalComThisEspecial()

// // this???
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()

// const arrowComThisEspecial = arrowComThis
//   .bind({ nome: "Ana2" })
// arrowComThisEspecial()

// Parametro padrao
function contagemRegressiva(inicio: number = 5, fim: number = inicio - 5): void {
  console.log(inicio)
  while (inicio > fim) {
    inicio--
    console.log(inicio)
  }
  console.log("Fim")
}

contagemRegressiva()
contagemRegressiva(3)

// Rest & Spread
const numbers = [1, 10, 99, -5, 200, 1000, 34];
console.log(Math.max(...numbers))

const turmaA: string[] = ["Joao", "Maria", "Fernanda"];
const turmaB: string[] =
  ["Fernando", ...turmaA, "Miguel", "Lorena"];
console.log(turmaB)

function retornarArray(...args: number[]): number[] {
  return args
}

const numeros = retornarArray(1, 2, 4, 5, 6, 345, 623)
console.log(numeros)
console.log(retornarArray(...numbers))

// Rest & Spread (Tupla)

const tupla: [number, string, boolean] = [1, 'abc', false];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) {
  console.log(Array.isArray(params))
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)

// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2010]
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

// Destructuring (objeto)
const item = {
  nome: 'SSD 240 GB',
  preco: 200,
  caracteristicas: {
    w: 'importado'
  }
}

const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem)
console.log(precoItem)

const { nome: n, preco: p, caracteristicas: { w } } = item
console.log(n)
console.log(p)

const usuarioID: string = 'SuporteCod3r';
const notificacoes: string = '19';
// const boasVindas  = 'Boas vindas' + usuarioID + 
//   'Notificacoes: ' + notificacoes
const boasVindas = `
Boas vindas ${usuarioID},
Notificacoes: ${parseInt(notificacoes) > 9 ? '+9' : notificacoes}
`
console.log(boasVindas)
console.log(`${(1 + 1) * 30}`)
console.log(`Motor: ${caracteristicas[0]}`)

// Ex: 1
// var dobro = function(valor) {
//   return valor * 2
// console.log(dobro(10))
// }
const dobro = (valor: number): number => valor * 2
console.log(dobro(10))

// Ex: 2
// var dizerOla = function (nome) {
//   if (nome === undefined) { nome = "Pessoa"}
//   console.log("Ola, " + nome)
// }

const dizerOla = function (nome1: string = "Pessoa"): void {
  console.log(`Ola, ${nome1}`)
}

dizerOla()
dizerOla("Ana")

// Ex3:
// var nums = [-3, 33, 38, 5]
// console.log("???")

const nums: Number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbers))

// Ex4:
const array: Number[] = [55, 20, ...nums]
// array.push(...nums)
console.log(array)

// Ex5:
// var notas = [8.4, 6.3, 9.4];
// var nota1 = notas[0];
// var nota2 = notas[1];
// var nota3 = notas[2];
// console.log(nota1, nota2, nota3)

const notas: Number[] = [8.4, 6.3, 9.4];
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)


// var cientista = { primeiroNome: "Will", experiencia: 12 }
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
// console.log(primeiroNome, experiencia)

const cientista: { primeiroNome: string, experiencia: number } =
{
  primeiroNome: "Will",
  experiencia: 12
}

const { primeiroNome: primeiroNome2, experiencia: experiencia2 } = cientista
console.log(primeiroNome2)
console.log(experiencia2)

// Calback

// function esperar3s(callback: (dado: string) => void) {
//   setTimeout(() => {
//     callback('3 segundos depois...')
//   }, 3000)
// }

// esperar3s(function (resultado: string) {
//   console.log(resultado)
// })

// function esperar3sPromise() {
//   return new Promise((resolve: any) => {
//     setTimeout(() => {
//       resolve('3 segundos depois promise...')
//     }, 3000)
//   })
// }

// esperar3sPromise()
//   .then(dado => console.log(dado))

// fetch('https://swapi.dev/api/people/1')
//   .then(res => res.json())
//   .then(personagem => personagem.films)
//   .then(films => fetch(films[0]))
//   .then(resFilm => resFilm.json())
//   .then(filme => console.log(filme.title))
//   .catch(err => console.log(`Catch!!! ${err}`))