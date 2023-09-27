function perguntarElementos() {
    let elementos = []
    let validar = true
    let choose
    let elemento

    while (validar == true) {
        choose = prompt('Deseja colocar elemento? S/N')
        if (choose == 'S' || choose == 's') {
            elemento = prompt('Informe qual elemento vai colocar: ')
            elementos.push(elemento)
        } else if (choose == 'N' || choose == 'n') {
            validar = false
        } else {
            alert('Comando não identificado')
        }
    }
    alert(`
    Elementos: ${elementos}
    Elementos Invertidos: ${inverterElementos(elementos)}
    `)
}

function inverterElementos(array) {
    let elementosInvertidos = []
    for (let ind = array.length - 1; ind >= 0; ind--) {
        elementosInvertidos.push(array[ind])
    }
    return elementosInvertidos
}

perguntarElementos()