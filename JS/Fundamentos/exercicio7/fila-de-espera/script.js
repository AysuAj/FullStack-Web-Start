let pacientes = []
let choose
let validar = true


while (validar == true) {
    let fila = ''
    for (let i = 0; i < pacientes.length; i++) {
        fila += `${i + 1} - ${pacientes[i]}   `
    }
    choose = prompt(`
    Fila: ${fila}

    1 - Novo Paciente
    2 - Consulta Paciente
    3 - Sair

    Escolha:
    `)

    if (choose == '1') {
        let novoPaciente = prompt('Informe o novo paciente a ser cadastrado: ')
        pacientes.push(novoPaciente)

    } else if (choose == '2') {
        let cadastroPaciente = pacientes.shift()
        if (cadastroPaciente === undefined) {
            alert('Não há pacientes na fila')
        } else {
            alert(`Paciente ${cadastroPaciente} será consultado`)
        }

    } else if (choose == '3') {
        alert('Saindo do programa...')
        validar = false
    } else {
        alert('Opção não permitida!')
        alert('Voltando ao menu inicial...')
    }

}

alert('Programa encerrado...')