/* Função com parâmetro e retorno;
Calcular o valor com desconto
Imagina que temos um site de vendas e precisamos de uma função para calcular o desconto aplicado em um produto. Essa função recebe o valor do produto e o valor do desconto.
Por exemplo: Se chamarmos a função passando o valor 100 e o desconto 5 ela deve retornar o valor 95, que corresponde ao valor com o desconto de 5% aplicado
*/

//valor do produto
//valor do desconto

const valor = 120
const desconto = 5
const valorFinal = valor*(1 - desconto/100)

console.log(valorFinal)

function debug(variavel) {
    const tipo = typeof variavel;

    console.log(`[DEBUG] Valor: $(variavel) - Tipo: $(tipo}`);
}

function calculaDesconto(valor, desconto) {
    const valorFinal = valor*(1 - desconto/100)
    return valorFinal.toFixed(2)
}

const valorComDesconto = calculaDesconto(1000, 95)

console.log (valorComDesconto)