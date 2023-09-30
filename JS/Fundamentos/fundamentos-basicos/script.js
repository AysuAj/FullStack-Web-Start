function criarArea() {
    const tecnologias = document.getElementsByClassName('tecnologias')
    const elementoAngular = document.createElement('li')
    elementoAngular.id = 'angulas'
    elementoAngular.innerText = 'AngularJS'
    tecnologias[0].appendChild(elementoAngular)
}

function criarArea1() {
    const tecnologias = document.getElementsByClassName('tecnologias')
    const elementNode = document.createElement('li')
    console.log(elementNode)
    elementNode.id = 'node'
    elementNode.innerText = 'NodeJS'
    tecnologias[1].appendChild(elementNode)
    const teste = document.getElementById('teste')
    tecnologias[1].removeChild(teste)
}