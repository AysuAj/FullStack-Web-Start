let choose

do {
    choose = prompt(`
    -- Menu --
    
    1- Início
    2- Games
    3- Galeria
    4- Times
    5- Encerrar

    Escolha uma opção:
    `)

    switch (choose) {
        case '1':
            alert('Tela de Início foi escolhida')
            alert('Voltando para o menu...')
            break
        case '2':
            alert('Tela de games foi escolhida')
            alert('Voltando para o menu...')
            break
        case '3':
            alert('Tela de galeria escolhida')
            alert('Voltando para o menu...')
            break
        case '4':
            alert('Tela de times escolhida')
            alert('Voltando para o menu...')
            break
    }

    if ((choose < 1 || choose > 4) && choose != 5) {
        alert('Opção inválida.')
        alert('Voltando para o menu...')
    } else if (choose == 5) {
        alert('O programa está sendo encerrado...')
        break
    }

} while (true)