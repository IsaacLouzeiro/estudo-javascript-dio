// 2) Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC;

// class Pessoa {
//     nome;
//     peso;
//     altura;

//     constructor(nome, peso, altura) {
//         this.nome = nome;
//         this.peso = peso;
//         this.altura = altura;
//     }

//     imc() {
//         return this.peso / Math.pow(this.altura, 2);
//     }

//     classificarImc() {
//         const imc = this.imc();

//         if(imc < 18.5) {
//             return 'abaixo do peso';
//         } else if((imc >= 18.5) && (imc < 25)) {
//             return 'com peso normal';
//         } else if((imc >= 25) && (imc < 30)) {
//             return 'acima do peso';
//         } else if((imc >= 30) && (imc <= 40)) {
//             return 'obeso';
//         } else {
//             return 'com obesidade grave';
//         }
//     }
// }

// const jose = new Pessoa('José', 80, 1.75);

// console.log(`Me chamo ${jose.nome} e o meu IMC é igual a ${jose.imc().toFixed(2)} e estou ${jose.classificarImc()}.`);

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function descreverPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`);
}

const renan = new Pessoa('Renan', 30);
console.log(descreverPessoa(renan));