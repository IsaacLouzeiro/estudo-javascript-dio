const { gets, print } = require('./funcoes-auxiliares');

/*
    2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
    Imprima o maior e o menor número deste conjunto.

    Exemplo:
        Entrada:
            4
            100
            150
            90
            200

        Saída:
            Maior número: 200
            Menor número: 90
*/

const numeros = gets();
const numerosArray = [];

for(let i = 0; i < numeros; i++) {
    numerosArray.push(gets());
}

var maior = Math.max.apply(null, numerosArray)
var menor = Math.min.apply(null, numerosArray)

print(`Maior número: ${maior} \nMenor número: ${menor}`);