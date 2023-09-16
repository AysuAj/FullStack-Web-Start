const currentYear = new Date()

let nome = prompt("Informe seu nome: ")
let sobrenome = prompt("Informe seu sobrenome: ")
let estudo = prompt('Informe seu campo de estudo: ')
let anoDeNascimento = prompt('Informe seu ano de  nascimento: ')

const idade = currentYear.getFullYear() - anoDeNascimento

alert(`Seu nome completo é ${nome} ${sobrenome}
Está estudando atualmente ${estudo}
Você tem ${idade} anos de idade.`)


