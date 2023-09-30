let cont = 0

function escalarJogador() {
    cont++

    const h3 = document.createElement('h3')
    h3.innerText = `Jogador ${cont}`
    const secaoPrincipal = document.getElementById('secao-principal')
    const ulPrincipal = document.createElement('ul')
    ulPrincipal.id = 'idUlPrincipal'
    ulPrincipal.type = 'none'
    secaoPrincipal.appendChild(ulPrincipal)
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
    inputPosicaoJogador.id = 'selectPosicaoJogador'
    inputPosicaoJogador.type = 'text'
    inputPosicaoJogador.name = 'posicaoJogador'
    liPosicaoJogador.appendChild(inputPosicaoJogador)

    const liNumeroCamisa = document.createElement('li')
    ulPrincipal.appendChild(liNumeroCamisa)
    liNumeroCamisa.innerHTML = '<label for="selectNumeroCamisa">Número de camisa: </label'
    const inputNumeroCamisa = document.createElement('input')
    inputNumeroCamisa.id = 'selectNumeroCamisa'
    inputNumeroCamisa.type = 'number'
    inputNumeroCamisa.name = 'numeroCamisa'
    liNumeroCamisa.appendChild(inputNumeroCamisa)

    const liEscalarJogador = document.createElement('li')
    ulPrincipal.appendChild(liEscalarJogador)
    const buttonEscalar = document.createElement('button')
    buttonEscalar.innerText = 'Escalar Jogador'
    buttonEscalar.onclick = console.log('teste')
    liEscalarJogador.appendChild(buttonEscalar)
}

function salvarJogador() {

}