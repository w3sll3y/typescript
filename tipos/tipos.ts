//string
let nome: string = 'Joao';
console.log(nome);
// nome = 28

//numbers
let idade: number = 27;
// idade = 'Ana'
idade = 27.5;
console.log(idade);

//bolean 
let possuiHobbies: boolean = false;
// possuiHobbies = 1;
console.log(possuiHobbies);

//tipos explicitos;
let minhaIdade: number; //any //boolean //string //[]
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade eh 27';

//array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
// hobbies = 100
console.log(hobbies);

// tuplas
let endereco: [string, number, string?] = ["Av Principal", 99];
console.log(endereco);

endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);

// enums
enum Cor {
  Cinza, //0
  Verde = 100, //100
  Azul = 10, //10
  Laranja,
  Amarelo,
  Vermelho = 100
};

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// any
let carro: any = "BMW";
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);

// funcoes
function retornaMeuNome(): string {
  // return minhaIdade
  return nome;
}

console.log(retornaMeuNome())

function digaOi(): void {
  console.log('Oi');
  // return minhaIdade
}

digaOi();

function multiplicar(numA: number, numB: number): number {
  return numA * numB;
};

// console.log(multiplicar(2, 'Bia'));
console.log(multiplicar(4.7, 9));

//tipos funcao
let calculo: (numeroA: number, numeroB: number) => number;
// calculo = digaOi
// calculo()
// calculo = {}

calculo = multiplicar;
console.log(calculo(5, 6));

//objeto
let usuario: { nome: string, idade: number } = {
  nome: 'Wesley',
  idade: 23
};

console.log(usuario);
// usuario = {}

// usuario = {
//   name: 'Maria',
//   age: 31
// }

usuario = {
  nome: 'Maria',
  idade: 31
};
console.log(usuario);

//Alias
type Funcionario = {
  supervisores: string[],
  baterPonto: (horas: number) => string
};

let funcionario: Funcionario = {
  supervisores: ["Wesley", "Ricardo", "Gustavo"],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto Normal';
    }
    else {
      return 'Fora do horario';
    };
  }
};

let funcionario2: Funcionario = {
  supervisores: ["Wesley", "Ricardo", "Gustavo"],
  baterPonto(horario: number): string {
    if (horario <= 8) {
      return 'Ponto Normal';
    }
    else {
      return 'Fora do horario';
    };
  }
};

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));

// funcionario = {}

let nota: number | string = 10;
console.log(`Minha nota eh ${nota}`);
nota = '9';
console.log(`Minha nota eh ${nota}`);
// nota = true

// Checando tipo 
let valor = 30;

if (typeof valor === "number") {
  console.log("Eh um number!")
} else {
  console.log(typeof valor)
};

// never
function falha(msg: string): never {
  throw new Error(msg)
};

const produto = {
  nome: "sabao",
  preco: 4,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha("Precisa ter um nome");
    }
    if (this.preco < 0) {
      falha("preco invalido")
    }
  }
};

produto.validarProduto();

let altura = 12;
// altura = null

let alturaOpcional: number | null = 12;
alturaOpcional = null;

type Contato = {
  nome: string,
  tel1: string,
  tel2: string | null
};

const contato1: Contato = {
  nome: "Fulano",
  tel1: "1232131231",
  tel2: null
};

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);

let podeSerNulo = null; // any
podeSerNulo = 12;
console.log(podeSerNulo);
podeSerNulo = "asdsd";
console.log(podeSerNulo);



type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
};

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[]
};

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number): number {
    return this.saldo += valor
  }
};

let correntista: Correntista = {
  nome: "Ana Silva",
  contaBancaria: contaBancaria,
  contatos: ["34567890", "98765432"]
};

correntista.contaBancaria.depositar(3000);
console.log(correntista);