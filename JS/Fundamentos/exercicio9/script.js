let validar = true

while (validar == true) {
    let choose = prompt(`
    CALCULADORA GEOMÉTRICA

    1 - Área do triângulo
    2 - Área do retângulo
    3 - Área do quadrado
    4 - Área do trapézio
    5 - Área do círculo
    6 - Sair
    
    Escolha:
    `)

    if (choose == '1') {
        areaTriangulo()

    } else if (choose == '2') {
        areaRetangulo()

    } else if (choose == '3') {
        areaQuadrado()

    } else if (choose == '4') {
        areaTrapezio()

    } else if (choose == '5') {
        areaQuadrado()

    } else if (choose == '6') {
        alert('Encerrando o programa...')
        validar = false
    }
}

alert('Programa encerrado!')


function areaTriangulo() {
    let baseTriangulo = parseFloat(prompt('Base Triângulo: '))
    let alturaTriangulo = parseFloat(prompt('Informe a altura do triângulo: '))

    return alert(`A área do triângulo com medida da base: ${baseTriangulo} e altura: ${alturaTriangulo} é: ${(baseTriangulo * alturaTriangulo) / 2}`)

}

function areaRetangulo() {
    let baseRetangulo = parseFloat(prompt('Base retângulo: '))
    let alturaRetangulo = parseFloat(prompt('Altura retângulo: '))

    return alert(`A área do retângulo com medida base: ${baseRetangulo} e altura: ${alturaRetangulo} é: ${baseRetangulo * alturaRetangulo}`)

}

function areaQuadrado() {
    let ladoQuadrado = parseFloat(prompt('Medida lado quadrado: '))

    return alert(`A área do quadrado com medida do lado: ${ladoQuadrado} é: ${Math.pow(ladoQuadrado, 2)}`)

}

function areaTrapezio() {
    let baseMaiorTrapezio = parseFloat(prompt('Base Trapézio maior: '))
    let baseMenorTrapezio = parseFloat(prompt('Base Trapézio menor: '))
    let alturaTrapézio = parseFloat(prompt('Altura Trapézio: '))

    return alert(`A área do Trapézio com medida da base maior: ${baseMaiorTrapezio}, base menor: ${baseMenorTrapezio} e altura: ${alturaTrapézio} é igual: ${((baseMaiorTrapezio + baseMenorTrapezio) * alturaTrapézio) / 2}`)

}

function areaCirculo() {
    let raioCirculo = parseFloat(prompt('Raio do círculo: '))

    return alert(`A área do círculo com medida do raio: ${raioCirculo} é igual: ${Math.PI * Math.pow(raioCirculo, 2)}`)
}

marcelo128ufmg @gmail.com