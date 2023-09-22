function cadastro(nome, idade, altura, peso) {
    let pessoa = {
        nome,
        idade,
        altura,
        peso,
    }
    console.log(validarIdade(idade))

    return pessoa
}

function validarIdade(idade) {
    if (idade >= 18) {
        return 'Você tem mais de 18 anos de idade.'
    } else {
        return 'Você tem menos de 18 anos de idade.'
    }

}

let nome = prompt('Informe seu nome: ')
let idade = prompt('Informe sua idade: ')
let altura = prompt('Informe sua altura: ')
let peso = prompt('Informe seu peso: ')


console.log(cadastro(nome, idade, altura, peso))