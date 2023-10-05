let namePlayerG
let numberPlayerG
let positionPlayerG

function selectedPlayer() {
    const namePlayer = document.getElementById('selectNamePlayer').value
    const numberPlayer = document.getElementById('selectNumberPlayer').value
    const positionPlayer = document.getElementById('selectPositionPlayer').value

    let confirmation = confirm(`
    Deseja escalar o seguinte jogador

    Nome: ${namePlayer}
    Número camisa: ${numberPlayer}
    Posição: ${positionPlayer}

    Escalar jogador?
    `)
    if (confirmation) {
        const ulMain = document.getElementById('ulMain')
        const liPlayer = document.createElement('li')
        liPlayer.id = `player${numberPlayer}`
        liPlayer.innerText = `Nome do jogador: ${namePlayer} - Número camisa: ${numberPlayer} - Posição: ${positionPlayer}`
        ulMain.appendChild(liPlayer)
        let nullNamePlayer = document.getElementById('selectNamePlayer')
        nullNamePlayer.value = ''
        let nullNumberPlayer = document.getElementById('selectNumberPlayer')
        nullNumberPlayer.value = ''
        let nullPositionPlayer = document.getElementById('selectPositionPlayer')
        nullPositionPlayer.value = ''
        namePlayerG = namePlayer
        numberPlayerG = numberPlayer
        positionPlayerG = positionPlayer

    } else {
        alert(`Escalação do jogador ${namePlayer} foi cancelada!`)
    }
}

function deletePlayerFn() {
    const numberDeletePlayer = document.getElementById('selectDeletePlayer')
    const deletePlayer = document.getElementById('player' + numberDeletePlayer.value)
    const confirmation = confirm(`
    Jogador

    Nome: ${namePlayerG}
    Número camisa: ${numberPlayerG}
    Posição: ${positionPlayerG}

    Deseja excluir o jogador da escalação?
    `)

    if (confirmation) {
        deletePlayer.remove()
        alert('Jogador removido da escalação!')
        numberDeletePlayer.value = ''
    } else {
        alert('Remoção do jogador foi cancelada!')
    }

}