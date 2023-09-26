let vagas = []

function menu() {
    let validar = true
    while (validar == true) {
        let choose = prompt(`
        --  VAGAS DE EMPREGO  --

        1 - Listar vagas disponíveis
        2 - Criar uma nova vaga
        3 - Visualizar uma vaga
        4 - Inscrever um candidato em uma vaga
        5 - Excluir uma vaga
        6 - Sair

        Escolha: 
        `)

        if (choose == 1) {
            vagasDisponiveis()

        } else if (choose == 2) {
            let nomeVaga = prompt('Nome da vaga: ')
            let descricaoVaga = prompt('Informe uma descrição para a vaga: ')
            let dataLimiteVaga = prompt('Informe uma data limite para inscrição da vaga: ')
            let confirmarVaga = confirm(`Gostaria de confirmar a inscrição da nova vaga -- ${nomeVaga} -- em nosso sistema de vagas?`)

            novaVaga(nomeVaga, descricaoVaga, dataLimiteVaga, confirmarVaga)

        } else if (choose == 3) {
            let visuVaga = prompt('Qual vaga deseja visualizar? Informe o ID ou nome:')
            visualizarVaga(visuVaga)

        } else if (choose == 4) {
            let nomeCandidato = prompt('Informe seu nome: ')
            let vaga = prompt('Informe a vaga a se candidatar: (ID da vaga)')
            inscricaoCandidatoVaga(nomeCandidato, vaga)

        } else if (choose == 5) {
            let excVaga = prompt('Qual vaga deseja excluir? (Digite o ID da vaga)')
            excluirVaga(excVaga)

        } else if (choose == 6) {
            alert('Encerrando o programa...')
            validar = false

        } else {
            alert('Opção não disponível.')
            alert('Voltando para a tela inicial de menu...')
        }

    }
}

menu()
alert('Programa encerrado!')

function vagasDisponiveis() {
    let vagasConcat = ''
    vagas.forEach(function (elemento, indice, array) {
        if (elemento.candidatos == []) {
            elemento.candidatos = 0
        }
        vagasConcat += `
        ID: ${indice}
        Nome da Vaga: ${elemento.nome}
        Quantidade de candidatos: ${elemento.candidato.length} 
        `
    })
    if (vagas.length > 0) {
        alert(vagasConcat)

    } else {
        alert('Por enquanto não há vagas disponíveis no sistema.')
        alert('Voltando para o menu principal!')
    }
}

function novaVaga(nome, descricao, dataLimite, confirmar) {
    if (confirmar == true) {
        vagas.push({
            indice: vagas.length - 1,
            nome,
            descricao,
            dataLimite,
            candidato: []
        })

    } else {
        alert('Vaga não cadastrada, pois foi cancelada a confirmação de inscrição.')
        alert('Voltando para o menu principal.')
    }
}

function visualizarVaga(visuVaga) {
    let vagaConcat = ''
    let ind
    let uniqVaga = vagas.filter(function (elemento, indice, array) {
        if (indice == visuVaga) {
            ind = indice
            vagaConcat += `
            Índice: ${indice}
            Nome da Vaga: ${elemento.nome}
            Descrição da vaga: ${elemento.descricao}
            Data Limite: ${elemento.dataLimite}
            Nome candidatos: ${elemento.candidato}
            `
        }
    })
    if (ind == visuVaga) {
        alert(vagaConcat)
    } else {
        alert('Não há vagas no sistema')
    }
}

function inscricaoCandidatoVaga(nome, vaga) {
    let inscCandidatoVaga = ''
    let ind
    vagas.filter(function (elemento, indice, array) {
        if (indice == vaga) {
            ind = indice
            inscCandidatoVaga += `
            Vaga selecionada pelo candidato ${nome} 
            Índice: ${indice}
            Nome da Vaga: ${elemento.nome}
            Descrição da vaga: ${elemento.descricao}
            Data Limite: ${elemento.dataLimite}

            Deseja confirmar o cadastro do ${nome} dentro da vaga ${vaga}?
            `
            elemento.candidato.push(nome)
        }
    })
    if (ind == vaga) {
        confirm(inscCandidatoVaga)
    } else {
        alert('Vaga não disponível!')
        alert('Voltando para o menu principal...')
    }
}

function excluirVaga(excVaga) {
    let confirmar
    vagas.filter(function (elemento, indice, array) {
        if (indice == excVaga) {
            vagas.pop(indice)
            confirmar = confirm(`
            A vaga abaixo será excluída do sistema
            Índice: ${indice}
            Nome da Vaga: ${elemento.nome}
            Descrição da vaga: ${elemento.descricao}
            Data Limite: ${elemento.dataLimite}
            Nome candidatos: ${elemento.candidato}

            Deseja excluir a vaga selecionada?
            `)
        }
        if (confirmar == true) {
            alert('Vaga excluída com sucesso!')

        } else {
            alert('A exclusão da vaga foi cancelada.')
        }
    })
    alert('Vaga excluída com sucesso!')
    alert('Voltando para o menu principal...')
}