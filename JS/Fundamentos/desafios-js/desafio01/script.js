function valor() {
    let numeros = []
    let validar = true
    let numero = parseFloat(prompt('Informe um número: '))
    numeros.push(numero)
    while (validar == true) {
        let choose = prompt('Deseja adicionar outro número? (S/N)')
        if ((choose == 'S') || (choose == 's')) {
            numero = parseFloat(prompt('Informe um número: '))
            numeros.push(numero)
        } else if ((choose == 'n') || (choose == 'N')) {
            alert('Preparando a média aritmética dos números digitados...')
            validar = false
        } else {
            alert('Comando não reconhecido, vontando a tela principal...')
        }
    }
    alert(`A média aritmética dos valores ${numeros} é igual a ${mediaAritmetica(numeros)}`)
}

valor()

function mediaAritmetica(array) {
    let acum = 0
    // Forma manual de fazer a função
    for (let i = 0; i < array.length; i++) {
        acum += array[i]

    }
    // Forma mais automática
    // let soma = array.reduce(function (acum, elemento) {
    //     return acum += elemento
    // }, 0)
    let media = acum / array.length
    return media
}

alert('Programa encerrado')