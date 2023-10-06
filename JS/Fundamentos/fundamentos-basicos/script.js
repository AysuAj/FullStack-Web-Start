const testEvent = document.getElementById('testEvent')

function cadastro(ev) {
    console.log(ev)
    const teste = ev.currentTarget.parentNode
    console.log(teste)
}

function cadastro1(ev) {
    const body = ev.currentTarget.parentNode.children
    const name = body.name.value
    const password = body.password.value
    const age = body.idade.value

    console.log(`
    Nome: ${name}
    Senha: ${password}
    const: ${parseInt(age) + 20}
    `)
    if (age > 20) {
        alert('Maior de idade')

    } else {
        alert('Menor de idade')
    }
}

testEvent.addEventListener('contextmenu', cadastro)

testEvent.addEventListener('click', cadastro1)

const removeEvent = document.getElementById('removeEvent')

removeEvent.addEventListener('click', function () {
    testEvent.removeEventListener('contextmenu', cadastro)

})

removeEvent.addEventListener('click', function () {
    testEvent.removeEventListener('click', cadastro1)
})