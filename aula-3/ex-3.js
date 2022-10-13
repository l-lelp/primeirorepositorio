// Criando número inteiro aleatório em função

function numeroAleatorio() {
    const min = 3
    const max = 10
    const numero = Math.random()*(max - min) + min

    return parseInt(numero);
}

console.log(numeroAleatorio())