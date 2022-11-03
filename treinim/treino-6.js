// Exibindo números de 1 a n fazendo gracinha

function numerosDe1aN (n) {

    let i = 1
    
    if (n <= 0) {
      console.log("Número inválido")
      return undefined
    }

    while (i <= n) {
        console.log(i)
        i++
    }
    }
    
    numerosDe1aN(-500)