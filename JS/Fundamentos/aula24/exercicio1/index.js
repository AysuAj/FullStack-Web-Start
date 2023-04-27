const numero = parseInt(prompt("Informe o número: "))
let string = 0
let mult
let strNumero
let cont = 1

for(let i = 1; i <= 20; i++) {
  mult = numero*i
  string += mult + '\n'
}

alert(string)