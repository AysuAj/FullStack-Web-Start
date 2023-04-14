let num1 = prompt("Informe o primeiro número: ")
let num2 = prompt("Informe o segundo número: ")

let soma = parseInt(num1) + parseInt(num2)
let sub = num1 - num2
let mult = num1 * num2
let div = num1 / num2

alert(`A soma de ${num1} + ${num2} é igual a ${soma}\n
      A subtraçao de ${num1} - ${num2} é igual a ${sub}\n
      A multiplicação de ${num1} x ${num2} é igual a ${mult}\n
      A divisão de ${num1} / ${num2} é igual a ${div}`)