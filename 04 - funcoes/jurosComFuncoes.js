// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// 1 - À vista Débito, recebe 10% de desconto;
// 2 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// 3 - Em duas vezes, preço normal de etiqueta sem juros;
// 4 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

const precoEtiqueta = 100;
let precoTotal = precoEtiqueta;
const formaDePagamento = 0;

function aplicarDesconto(valor, desconto) {
    return valor - (valor * desconto / 100);
}

function aplicarJuros(valor, juros) {
    return valor + (valor * juros / 100);
}

switch (formaDePagamento) {
    case 1:
        precoTotal = aplicarDesconto(precoEtiqueta, 10);
        console.log('O valor com o desconto de 10% é igual a ' + precoTotal);
        break;
    case 2:
        precoTotal = aplicarDesconto(precoEtiqueta, 15);
        console.log('O valor com o desconto de 15% é igual a ' + precoTotal);
        break;
    case 3:
        console.log("O valor a ser pago é igual a " + precoTotal);
        break;
    case 4:
        precoTotal = aplicarJuros(precoEtiqueta, 10);
        console.log('O valor com o juros de 10% é igual a ' + precoTotal);
        break;

    default:
        console.log("Opção inválida.");
        break;
}