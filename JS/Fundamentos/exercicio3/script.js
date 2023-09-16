const metros = parseFloat(prompt('Informe o valor em metros: '))
const choose = parseInt(prompt(`

Escolha para qual medida será convertido o valor informado:

    1- Milímetro (mm)
    2- Centímetro (cm)
    3- Decímetro (dm)
    4- Decâmetro (dam)
    5- hectômetro (hm)
    6- Quilômetro (km)

    Escolha:
`))

switch (choose) {
    case 1:
        alert(`${metros}m é igual à ${metros * 1000}mm`)
        break
    case 2:
        alert(`${metros}m é igual à ${metros * 100}cm`)
        break
    case 3:
        alert(`${metros}m é igual à ${metros * 10}dm`)
        break
    case 4:
        alert(`${metros}m é igual à ${metros / 10}dam`)
        break
    case 5:
        alert(`${metros}m é igual à ${metros / 100}hm`)
        break
    case 6:
        alert(`${metros}m é igual à ${metros / 1000}km`)
        break
    default:
        alert('Opção inválida!')
}