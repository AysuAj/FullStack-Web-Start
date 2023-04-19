/*
fileira 1 = arroz, feijao, macarrao, molho de tomate
fileira 2 = desinfetante, palha de aço, sabao em pó
fileira 3 = biscoito, salgadinho
*/

const alimento = prompt("Informe o nome do produto: ")

switch (alimento) {
  case 'arroz':
    alert(`O produto escolhido foi o ${alimento} e se encontra na primeira prateleira`)
    break

  case 'biscoito':
    alert(`O produto escolhido foi o ${alimento} e se encontra na terceira prateleira`)
    break

  case 'salgadinho':
    alert(`O produto escolhido foi o ${alimento} e se encontra na terceira prateleira`)
    break
  
  case 'desinfetante':
    alert(`O produto escolhido foi o ${alimento} e se encontra na segunda prateleira`)
    break

  default:
    alert('Produto nao encontrado')
  
}