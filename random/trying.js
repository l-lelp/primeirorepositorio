function valorDaInstalacao (valorInst) {
   
    let valorDoLed = 150
    let valorDaCascata = 300
    let metro = ('')
    let maoDeObra = 300 * metro 
    let km = ('')
    let valorDoFrete = 6.5 * km 
    let filtroEBomba = 1500
    let piscina = ('')
    const valorFinal = (valorDaCascata + maoDeObra + valorDoFrete + valorDoLed + filtroEBomba + piscina)
    let resultadoEsperado = console.log(`Olá, Sarah. O valor total da Instalação será: R$ ${valorFinal}. Boas vendas. =)`)
    return valorFinal

}

valorDaInstalacao () 