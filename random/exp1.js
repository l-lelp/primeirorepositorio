//calcula desconto

function calculaDesconto(valorProduto, desconto) {
    const valorFinal = valorProduto*(1-desconto/100)
    return valorFinal
}

console.log(calculaDesconto(110022230, 25))