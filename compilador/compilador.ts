let canal: string = "Gaveta";
let inscritos: number = 610234;

// canal = inscritos;
console.log(`Canal = ${canal}`);

// nome = "Pedro";

function soma(a: any, b: any) {
  return a + b
};

let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';

function sudar(isManha: boolean): string {
  let saudacao: string
  if (isManha) {
    saudacao = 'Bom dia!'
  } else {
    saudacao = 'Tenha uma boa vida'
  }
  return saudacao
}