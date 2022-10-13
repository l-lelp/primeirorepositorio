// Missão: Calcular um celular com 27% de desconto

const valorDoCelular = 14370
const descontoDoCelular = 27

function calculaDesconto(valor, desconto) {
    const valorFinal = valor*(1 - desconto)
    return valorFinal
    
} 
const valorComMuitoDesconto= calculaDesconto(valorFinal)




// Deu zebra!






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
    
    console.log (valorDoCelular)
