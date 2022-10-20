/* Dominando Loops

Ex1: Exibindo números de 1 a 10
Crie uma função que quando chamada ela mostra no console números de 1 a 10
*/

function exibeNumerosDe1aN(n) {
let i = 1;

if (n < 0) {
    console.log("Valor inválido");
    return undefined;
}

while(i <= n) {
    console.log(i);
    i = i + 1;
}

}

exibeNumerosDe1aN(-2)