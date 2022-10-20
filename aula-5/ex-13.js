/*
Ex-8: Maior item de uma lista.
Crie uma função que retorna o maior valor presente em uma lista de números passada como parâmetro
*/

function maiorItemDeUmaLista(lista) {
    let i = 0;
    let maior = 0;

    while (i < lista.length) {
        if(lista[i] > maior) {
            maior = lista[i];
        } 
        i++;
    }
    
    return maior

}

let lista = [-5, 6, 1, 8, 1000, 12, 3];
console.log(maiorItemDeUmaLista(lista));