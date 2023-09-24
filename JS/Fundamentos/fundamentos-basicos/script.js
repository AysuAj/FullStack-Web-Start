let pessoas = [
    {
        nome: 'Alessander',
        idade: '23',
        peso: 56,
        altura: 1.77,
        formacao: 'Técnico',
        area: 'TI'
    },
    {
        nome: 'Viego',
        idade: 200,
        peso: 82,
        altura: 1.92,
        formacao: 'alma',
        area: 'Sombra'
    },
    {
        nome: 'Kindred',
        idade: 1000,
        peso: 50,
        altura: 1.58,
        formacao: 'morte',
        area: 'sombria'
    },
    {
        nome: 'Aatrox',
        idade: 1000,
        peso: 250,
        altura: 2.38,
        formacao: 'inferno',
        area: 'fogo'
    }
]

let lista = [1, 5, 7, 4, 2, 12]

let fnFilter = pessoas.forEach(function (elemento) {
    return elemento.idade > 500 ? elemento.status = 'velho' : elemento.status ='não é velho'
})

console.log(fnFilter)