alert("Iniciando MENU...")

let condition = true
let chooseC = 0
let choose

do {
  choose = prompt(`
          -- Menu --
          
          1- Conta
          2- Extrato
          3- Pagamento
          4- Pix
          5- Encerrar

          Qual escolha?
       `)

  chooseC = parseInt(choose)
  switch (chooseC) {
    case 1:
      alert('Você escolheu CONTA')
      break
    case 2:
      alert('Você escolheu Extrato')
      break
    case 3:
      alert('Você escolheu Pagamento')
      break
    case 4:
      alert('Você escolheu PIX')
      break
    case 5:
      alert('Encerrando programa...')
      condition = false
      break
    default:
      alert('Opção não foi encontrada\n' +
        'Voltando para o menu inicial...')
      break
  }

} while (condition == true)


alert('Programa finalizado com sucesso!')