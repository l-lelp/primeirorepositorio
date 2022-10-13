// Criando número inteiro aleatório em função

function debug(variavel) {
    
    const tipo = typeof variavel

    console.log(`[DEBUG] Valor: ${variavel} - Tipo: ${tipo}`)

}

function numeroAleatorio() {
    const min = 3
    const max = 10
    const numero = Math.random()*(max - min) + min
    const numeroInteiro = Math.floor(numero)

    debug(min)
    debug(max)
    debug(numero)
    debug(numeroInteiro)

    return numero
}

console.log(numeroAleatorio())