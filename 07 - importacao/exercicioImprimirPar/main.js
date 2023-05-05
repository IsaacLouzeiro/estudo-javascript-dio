const { gets, print } = require('./funcoes-auxiliares');

/*
    3) Faça um programa que receba a quantidade de números e seus respectivos valores.
    Imprima todos os números pares.
    Exemplo:
        Entrada:
            5
            1
            3
            9
            10
            12

        Saída:
            Números Pares: 10, 12
*/

const numeros = gets();
let pares = [];

for (let i = 0; i < numeros; i++) {
    const numero = gets();
    if(numero % 2 === 0) {
        pares.push(numero);
    }
}

print(`Números pares: ${pares}`);