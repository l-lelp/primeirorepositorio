/*
Ex-7: Crie uma função que retorna uma lista com números preenchidos de 1 a 10
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

function geradorDeLista() {
    let i = 0;
    let lista = [];

    while (i < 100) {
        lista[i] = i+1;
        i++;

    }
    
    return lista;
    
    }
    
    console.log(geradorDeLista());