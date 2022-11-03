// Pares

function exibePares(n) {
    let i = 1

    if (n < 0) {
    console.log("Número indisponível")
    return undefined

    }

    while (i <= n) {
        if (i % 2 === 0) {
        console.log(i)
    }
    i++
}
}

exibePares(2000)
    
