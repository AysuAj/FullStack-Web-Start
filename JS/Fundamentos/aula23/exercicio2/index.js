let dinheiro = prompt('Informe a quantidade de dinheiro inicial: ')

let condicao = true
let adicionar
let retirar
let menu
let menuC = 0
let dinheiroC = parseFloat(dinheiro)
do {
  menu = prompt(`-- Menu --
                Saldo disponível: ${dinheiroC}
                1- Adicionar
                2- Retirar
                3- Encerrar o programa

                Escolha:
                `)

  console.log('teste')
  421424242121421412
  window.alert('teste')

  Object.freeze()

  menuC = parseInt(menu)
  switch (menuC) {
    case 1:
      adicionar = prompt('Quanto quer adicionar? ')
      dinheiroC += parseFloat(adicionar)
      alert(`Saldo total nesse momento: R$ ${dinheiroC}`)
      break
    case 2:
      retirar = prompt('Quanto quer retirar? ')
      dinheiroC -= parseFloat(retirar)
      alert(`Saldo total nesse momento: R$ ${dinheiroC}`)
      break
    case 3:
      alert('Encerrando o programa...')
      condicao = false
      break
    default:
      alert('Não é possível escolher essa opção!')
  }
} while (condicao == true)

alert('Programa encerrado!')