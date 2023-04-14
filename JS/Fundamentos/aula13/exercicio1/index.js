const data = new Date()

let nome = prompt("Informe o seu nome: ")
let sobrenome = prompt("Informe seu sobrenome: ")
let estudo = prompt("Informe seu campo de estudo: ")
let nascimento = prompt("Informe sua data de nascimento: ")

let idade = data.getFullYear() - nascimento

alert(`Seu nome é: ${nome}\n
      Seu sobrenome é: ${sobrenome}\n
      Seu campo de estudo é: ${estudo}\n
      Sua idade é: ${idade}`) 