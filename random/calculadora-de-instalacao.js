/* O objetivo dessa calculadora será fazer com que Sarah não me pergunte mais quanto ficará o valor de alguma piscina, seja ela instalada ou apenas o casco.
Tentarei fazer 2 funcões: Na primeira, pegarei o valor da piscina e farei um rápido cálculo de quanto ficará com a entrega, com isso, me poupará tempo em me perguntar quanto custa o frete.
Já na segunda, calcularei o preço da instalação.
*/


/* Valor apenas da entrega.
*/
function valorDoFrete (valor) {
   
    const valorFinal = valor * (6.5)
    let resultadoEsperado = console.log(`Olá, Sarah. O valor total do frete será: R$ ${valorFinal}. Boas vendas. =)`)
    return valorFinal

}

valorDoFrete ()
/* Inserir o valor da km entre parênteses.
*/


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

