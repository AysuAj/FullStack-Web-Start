let baralho = []
let validar = true
let choose

while (validar == true) {
    choose = prompt(`
    Quantidade de cartas: ${baralho.length}
    Cartas: ${baralho}

    1 - Adicionar carta
    2 - Retirar carta
    3 - Sair

    Escolha: 
    `)

    if (choose == 1) {
        let carta = prompt('Informe a carta para adicionar no baralho: (ex. 3 ouros)')
        baralho.unshift(carta)
        alert(`A carta ${carta} foi adicionada ao baralho.`)

    } else if (choose == 2) {
        let removerCarta = baralho.shift()
        if (removerCarta === undefined) {
            alert('Não há carta disnponível no baralho.')
        } else {
            alert(`A carta ${removerCarta} foi removida do topo do baralho.`)
        }

    } else if (choose == 3) {
        alert('Encerrando o programa...')
        validar = false
    } else {
        alert('Opção não permitida!')
        alert('Voltando para o menu inicial...')
    }

}

alert('Programa encerrado com sucesso.')