// Criar uma função que calcula descontos

function calculadoraDeDescontos (valor, desconto) {
   
    const valorFinal = valor * (1 - desconto/100)
    let resultadoEsperado = console.log(`Você de fato pretende comprar? O valor será: R$ ${valorFinal}. Tenha um ótimo dia. =)`)

}

calculadoraDeDescontos (23400, 17,4)