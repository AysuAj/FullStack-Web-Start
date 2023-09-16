let quantidadeDinheiro = parseFloat(prompt('Informe a quantidade inicial de dinheiro: '))
let choose
let adicionarDinheiro
let retirarDinheiro
let historico = ''

do {
    choose = prompt(`
    Quantidade de dinheiro: ${quantidadeDinheiro}
    
    Deseja adicionar ou retirar dinheiro?
    1 - Retirar
    2 - Adicionar
    3 - Ver histórico de transação
    4 - Ver saldo atual
    5 - Encerrar programa

    Escolha uma opção: 
    `)

    if (choose == '1') {
        retirarDinheiro = parseFloat(prompt('Quanto de dinheiro deseja retirar? '))
        if (retirarDinheiro > quantidadeDinheiro) {
            alert('Não é possível realizar a transação, pois não há saldo suficiente.')
            alert('Voltando para a tela inicial...')
        } else {
            quantidadeDinheiro -= retirarDinheiro
            historico += `
        ------ 
            Retirou ${retirarDinheiro}\n
            Saldo ${quantidadeDinheiro}
        ------ 
            `
            alert(`
            Retirado - ${retirarDinheiro}
            Quantidade atual de dinheiro guardado: ${quantidadeDinheiro}
            `)
        }
    } else if (choose == '2') {
        adicionarDinheiro = parseFloat(prompt('Quanto de dinheiro deseja adicionar? '))
        quantidadeDinheiro += adicionarDinheiro
        historico += `
        ------                         
            Adicionou ${adicionarDinheiro} \n
            Saldo ${quantidadeDinheiro}
        ------
        `
        alert(`
        Adicionado + ${adicionarDinheiro}
        Quantidade atual de dinheiro guardado: ${quantidadeDinheiro}
        `)

    } else if (choose == '3') {
        alert(`${historico}`)

    } else if (choose == '4') {
        alert(`Saldo atual na conta: ${quantidadeDinheiro}`)

    } else if (choose == '5') {
        alert('Encerrando o programa...')
        break
    }

} while (true)

alert('Programa encerrado...')