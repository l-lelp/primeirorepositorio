/* Dominando Loops

Ex1: Exibindo números de pares entre 1 a 10
Crie uma função que quando chamada ela mostra no console números pares que estejam entre 1 a N, sendo N >= 1
*/

/* Dominando Loops

Ex1: Exibindo nÃºmeros de 1 a 10
Crie uma funÃ§Ã£o que quando chamada ela mostra no console nÃºmeros de 1 a 10
*/

function exibeParesEntre1eN(n) {
    let i = 1;
    
    if (n < 0) {
        console.log("Valor invÃ¡lido");
        return undefined;
    }
    
    while(i <= n) {
        if (i % 2 === 0)
        console.log(i);
        i = i + 1;
    }
    
    }
    
    exibeParesEntre1eN(12243)

    // Outra solução:

    function exibeParesEntre1eN(n) {
        let i = 0;
        
        if (n < 0) {
            console.log("Valor inválido");
            return undefined;
        }
        
        while(i <= n) {
            if (i % 2 === 0)
            console.log(i);
            i = i + 2;
        }
        
        }
        
        exibeParesEntre1eN(6)
