/*
Ex-7: Crie uma função que retorna uma lista com números preenchidos de 1 a 10
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

function geradorDeLista(n) {
    let i = 0;
    let lista = [];

    while (i < n) {
        lista.push(i+1);
        i++;
    
    }

    return lista;

}    

let lista = geradorDeLista(10);

    console.log(typeof lista.toLocaleString() === 'string')
