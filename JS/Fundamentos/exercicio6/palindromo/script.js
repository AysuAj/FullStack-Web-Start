const palavra = prompt('Informe a palavra a ser analisada: ')
let i
let palavraTrasPraFrente = ''

for (i = palavra.length - 1; i >= 0; i--) {
    palavraTrasPraFrente += palavra[i]
}

if (palavra === palavraTrasPraFrente) {
    alert(`
    A palavra informada é um palíndromo:

    Palavra informada: ${palavra}
    Palavra de trás pra frente: ${palavraTrasPraFrente}
    `)

} else {
    alert(`
    A palavra informada não é um palíndromo:

    Palavra informada: ${palavra}
    Palavra de trás pra frente: ${palavraTrasPraFrente}
    `)
}