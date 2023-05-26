let palavra = prompt("Informe uma palavra: ")

let palavraReverse = palavra.split('').reverse().join('')

if (palavra === palavraReverse) {
  alert('É um palíndromo')

} else {
    alert(`
           Não é um palíndromo
           Palavra da esquerda para direita: ${palavra}
           Palavra da direita para esquerda: ${palavraReverse}`)
}