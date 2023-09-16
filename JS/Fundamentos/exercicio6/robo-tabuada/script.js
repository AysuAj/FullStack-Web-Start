const numero = parseInt(prompt('Informe o valor ser utilizado na tabuada: '))
let resultado = ''


for (let i = 1; i <= 20; i++) {
    resultado +=
        `${numero} x ${i} = ${numero * i}\n`
}

alert(resultado)