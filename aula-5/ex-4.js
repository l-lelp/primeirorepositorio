/* 
Ex-4: Exibindo N números pares em ordem crescente a partir de 2.
Crie uma função que quando chamada ela mostra no console N números pares em ordem crescente a partir de 2, sendo N >= 1
*/


function exibeNPares(n) {
    let i = 1;
    let numeroPar = 2;
    
    if (n < 0) {
        console.log("Valor inválido");
        return undefined;
    }
    
    while(i <= n) {
        console.log(numeroPar);
        numeroPar += 2;
        i = i + 1;
        i++;
    }
    
    }
    
    exibeNPares(12)

    // OU

    function exibeNPares(n) {
        let i = 1;
        let numeroPar = 2;
        
        if (n < 0) {
            console.log("Valor inválido");
            return undefined;
        }
        
        while(i <= n) {
            console.log(i*2);
            i++;
        }
        
        }

        exibeNPares(12)