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

    switch (choose) {

        case '1':
            areaTriangulo()
            break
    }
}


function areaTriangulo() {
    let baseTriangulo = prompt('Base Triângulo: ')
    let alturaTriangulo = prompt('Informe a altura do triângulo: ')

    return alert(`A área do triângulo com a medida da base ${baseTriangulo} e altura ${alturaTriangulo} é: ${(baseTriangulo * altura) / 2}`)

}

function areaRetangulo() {
    let baseRetangulo = prompt('Base retângulo: ')
    let alturaRetangulo = prompt('Altura retângulo: ')

    return baseRetangulo * alturaRetangulo

}

function areaQuadrado() {
    let ladoQuadrado = prompt('Medida lado quadrado: ')

    return Math.sqrt(ladoQuadrado)

}

function areaTrapezio() {
    let baseMaiorTrapezio = prompt('Base Trapézio maior: ')
    let baseMenorTrapezio = prompt('Base Trapézio menor: ')
    let alturaTrapézio = prompt('Altura Trapézio: ')

    return ((baseMaiorTrapezio + baseMenorTrapezio) * alturaTrapézio) / 2

}

function areaCirculo() {
    let raioCirculo = prompt('Raio do círculo: ')

    return Math.PI * Math.sqrt(raioCirculo)
}