/* A intenção dessa calculadora é demonstrar pra Sarah quanto que ficará o valor de cada entrega sem precisar fazer contas necessariamente ou me perguntar o preço
*/


function valorDoFrete (frete, piscina) {
   
    let valorDaPiscina = (2200)
    const valorFinal = frete * (6.5) + valorDaPiscina
    let resultadoEsperado = console.log(`Olá, Sarah. O valor total com a entrega será: R$ ${valorFinal}. Boas vendas. =)`)
    return valorFinal

}

valorDoFrete (283)
/* Inserir o valor da km entre parênteses.
*/