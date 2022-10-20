/*
Ex-8: Maior item de uma lista.
Crie uma função que retorna o maior valor presente em uma lista de números passada como parâmetro
*/

function maiorItemDeUmaLista(lista) {
    let i = 0;
    let maior = [0];

    while (i < lista.lenght) {
        if(lista[i] > maior) {
            maior = lista[i];
        } 
        i++;
    }
    
    return maior

}

let lista = [-100003213213133131300, -602331322131321300000, -51002131313130001, -121313131331313138, -31000010, -122222222212, -23132132132131233];
console.log(maiorItemDeUmaLista(lista));