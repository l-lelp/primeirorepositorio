// Trying

//1º passo: Criar constantes// 

const valor = 250
const desconto = 10
const valorFinal = valor * (1 - desconto/100)
console.log(valorFinal)

//2º passo: Declarar a função

function calculadoraDeDescontos(valor, desconto) {
    const ValorFinal = valor*(1 - desconto/100)
    return Math.round(ValorFinal)
}

const valorComDesconto = calculadoraDeDescontos(10000, 33)

console.log(valorComDesconto)

