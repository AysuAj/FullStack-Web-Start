console.log('teste')

const profissao = document.getElementById('lista-profissao')
console.log(profissao)

const areaProfissao = document.getElementsByClassName('lista-area')
console.log(areaProfissao)

function criarElemento() {
    const elementoArea = document.getElementById('teste')
    console.log(elementoArea)
    const elementoNode = document.createElement('li')
    console.log(elementoNode)
    elementoNode.innerText = 'NodeJS'
    elementoArea.append(elementoNode)
}