// 02) Crie uma lista que seja capaz de percorrer uma lista de numeros e imprima cada numero par encontrado

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let listaPar = [];
for(let i = 0; i <= lista.length; i++) {

    if(lista[i] % 2 === 0) {

        listaPar.push(lista[i]);      
        
    }
}
console.log('Os números pares são: ' + listaPar);