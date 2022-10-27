// criando uma função debug

function funcaoDebug (debugar) {
    const tipo = typeof debugar
    console.log(`[DEBUG] Valor: ${debugar} Tipo: ${tipo}`)
}

function debugando (logo) {
    const tipo = typeof logo
    console.log(`[DEBUG] VALOR: ${debugando}; Tipo: ${tipo})`)
}

funcaoDebug ("aaaa")
debugando (21)
funcaoDebug (23)
debugando ("ola?")