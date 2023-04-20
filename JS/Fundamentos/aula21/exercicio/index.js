let valueConv

let valueMetros = prompt("Informe o valor em metros: ")
const medidas = prompt(
`Informe para qual medida deseja a conversão:\n
  mm - milímetro
  cm - centímetro
  dm - decímetro
  dam - decâmetro
  hm - hectômetro
  km - quilômetro

  Escolha:`)

valueMetros = parseFloat(valueMetros)

switch (medidas) {
  case 'mm':
    valueConv = valueMetros*1000
    break
  case 'cm':
    valueConv = valueMetros * 100
    break
  case 'dm':
    valueConv = valueMetros * 10
    break
  case 'dam':
    valueConv = valueMetros / 10
    break
  case 'hm':
    valueConv = valueMetros / 100
    break
  case 'km':
    valueConv = valueMetros / 1000
    break
  default:
    alert("Opção inválida")
}

alert(`
      Valor em metros: ${valueMetros}m
      Valor convertido para ${medidas}: ${valueConv}
      `)