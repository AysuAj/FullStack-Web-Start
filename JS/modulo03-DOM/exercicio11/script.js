let cont = 0
let jogadores = []

function escalarJogador() {
    cont++
    const secaoPrincipal = document.getElementById('secao-principal')
    const ulPrincipal = document.createElement('ul')
    ulPrincipal.type = 'none'
    secaoPrincipal.appendChild(ulPrincipal)
    const h3 = document.createElement('h3')
    h3.innerText = `Jogador ${cont}`
    ulPrincipal.appendChild(h3)

    const liNomeJogador = document.createElement('li')
    liNomeJogador.innerHTML = '<label for="selectNomeJogador">Nome do jogador: </label>'
    ulPrincipal.appendChild(liNomeJogador)
    const inputNomeJogador = document.createElement('input')
    inputNomeJogador.id = 'selectNomeJogador'
    inputNomeJogador.name = 'nomeJogador'
    inputNomeJogador.type = 'text'
    liNomeJogador.appendChild(inputNomeJogador)

    const liPosicaoJogador = document.createElement('li')
    liPosicaoJogador.innerHTML = '<label for="selectPosicaoJogador">Posição do jogador: </label>'
    ulPrincipal.appendChild(liPosicaoJogador)
    const inputPosicaoJogador = document.createElement('input')
    inputPosicaoJogador.type = 'text'
    inputPosicaoJogador.name = 'posicaoJogador'
    inputPosicaoJogador.id = 'selectPosicaoJogador'
    liPosicaoJogador.appendChild(inputPosicaoJogador)

    const liNumeroJogador = document.createElement('li')
    liNumeroJogador.innerHTML = '<label for="selectNumeroJogador">Número do jogador: </label>'
    ulPrincipal.appendChild(liNumeroJogador)
    const inputNumeroJogador = document.createElement('input')
    inputNumeroJogador.type = 'number'
    inputNumeroJogador.name = 'numeroJogador'
    inputNumeroJogador.id = 'selectNumeroJogador'
    liNumeroJogador.appendChild(inputNumeroJogador)

    const liEscalarJogador = document.createElement('li')
    ulPrincipal.appendChild(liEscalarJogador)
    const botaoEscalarJogador = document.createElement('input')
    liEscalarJogador.appendChild(botaoEscalarJogador)
    botaoEscalarJogador.type = 'submit'
    botaoEscalarJogador.value = 'Escalar'
    botaoEscalarJogador.onclick = function () {
        const nomeJogador = inputNomeJogador.value
        const numeroJogador = inputNumeroJogador.value
        const posicaoJogador = inputPosicaoJogador.value

        let confirmar = confirm(`
        Confirmar a escalação do jogar? 
        Nome: ${nomeJogador}
        Número camisa: ${numeroJogador}
        Posição: ${posicaoJogador}

        Confirmar?
        `)

        if (confirmar == true) {
            jogadores.push({ nome: nomeJogador, numero: numeroJogador, posicao: posicaoJogador })
            alert('Jogador Escalado')

        } else {
            alert('Jogador não escalado')
        }
    }

}

function listaJogadores() {
    let conctJogadores = ''
    for (let ind = 0; ind < jogadores.length; ind++) {
        cont = ind
        conctJogadores += `
        Jogador ${ind}

        Nome: ${jogadores[ind].nome}
        Numero: ${jogadores[ind].numero}
        Posição: ${jogadores[ind].posicao}
        `
    }
    alert(conctJogadores)
}

function excluirJogador() {
    let confirmar = confirm(`
    Dados jogador excluído

    Nome: ${jogadores[-1].nome}
    Número: ${jogadores[-1].numero}
    Posição: ${jogadores[-1].posicao}

    Confirmar exclusão do jogador?
    `)
    if (confirmar == true) {
        let exclusaoJogador = jogadores.pop()
        alert('Jogador excluído!')
    } else {
        alert('Jogador não excluído!')
    }
}