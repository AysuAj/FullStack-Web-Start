const nomeTurista = prompt('Informe o nome do turista: ')
let visitaCidade = prompt('Já visitou alguma cidade? S/N')
let cidades = 0
let cidadesVisitadas = ''
let informeCidade

while (true) {
    if (visitaCidade == 'n' || visitaCidade == 'N') {
        break
    }
    informeCidade = prompt('Informe qual cidade visitou: ')
    cidades++
    cidadesVisitadas += informeCidade + '\n'
    alert(`${nomeTurista} você diz que visitou ${informeCidade}`)
    visitaCidade = prompt('Já visitou alguma outra cidade? S/N')
}

if (cidades > 0) {
    alert(`${nomeTurista} você visitou ${cidades} cidades.`)
    alert(`
    A lista de cidades visitadas:
    ${cidadesVisitadas}
    `)
} else {
    alert(`${nomeTurista} visitou nenhuma cidade`)
}

