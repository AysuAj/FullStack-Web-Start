/*
## Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.
*/
let validar = true
let armazenamentoImoveis = []
let stringArray = ''

while (validar === true) {
    const choose = prompt(`
    Quantidade de imóveis cadastrados: ${armazenamentoImoveis.length}

    1 - Salvar imóvel
    2 - Mostrar todos imóveis salvos
    3 - Sair

    Escolha: 
    `)

    if (choose == '1') {
        let imoveis = {}
        let proprietario = prompt('Informe o nome do proprietário: ')
        let quantidadeQuartos = prompt('Informe a quantidade de quartos no imóvel: ')
        let quantidadeBanheiros = prompt('Informe a quantidade de banheiros na casa: ')
        let garagem = prompt('O imóvel possui garagem? S/N: ')

        imoveis.proprietario = proprietario
        imoveis.quantidadeQuartos = quantidadeQuartos
        imoveis.quantidadeBanheiros = quantidadeBanheiros

        if (garagem === 'S' || 's') {
            imoveis.garagem = 'Possui garagem'
        } else {
            imoveis.garagem = 'Não possui garagem'
        }

        let confirmacao = confirm(`
        Deseja salvar este imóvel?

        Proprietário: ${imoveis.proprietario}
        Quant. Quartos: ${imoveis.quantidadeQuartos}
        Quant. Banheiros: ${imoveis.quantidadeBanheiros}
        Garagem:${imoveis.garagem}
        `)
        if (confirmacao == true) {
            armazenamentoImoveis.push(imoveis)
            alert('Usuário salvo com sucesso!')
        } else {
            alert('Usuário não confirmou salvar o usuário.')
            alert('Voltando para o menu principal!')
        }


    } else if (choose == '2') {
        for (let i = 0; i < armazenamentoImoveis.length; i++) {
            stringArray +=
                `
            Imóvel ID ${i + 1}
            Proprietário: ${armazenamentoImoveis[i].proprietario}
            Quant. banheiros: ${armazenamentoImoveis[i].quantidadeBanheiros}
            Quant. quartos: ${armazenamentoImoveis[i].quantidadeQuartos}
            Garagem: ${armazenamentoImoveis[i].garagem}
            `
        }
        alert(stringArray)

    } else if (choose == '3') {
        alert('Encerrando programa...')
        validar = false

    } else {
        alert('Opção não permitida...')
        alert('Voltando para o menu inicial.')
    }
}

alert('Programa encerrado.')
console.log(armazenamentoImoveis)