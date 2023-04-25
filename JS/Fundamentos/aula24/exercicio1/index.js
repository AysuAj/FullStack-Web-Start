const numero = parseInt(prompt("Informe o número: "))
let string
let mult
let strNumero

for(let i = 1; i <= 20; i++) {
  mult = numero*i
  strNumero = mult
  strNumero = toString(strNumero) 
  string = strNumero + ' - '
}

alert(string)