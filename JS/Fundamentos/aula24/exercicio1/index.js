const numero = parseInt(prompt("Informe o número: "))
let string = 0
let mult

for(let i = 1; i <= 20; i++) {
  mult = numero*i
  string += mult + '\n'
}

alert(string)