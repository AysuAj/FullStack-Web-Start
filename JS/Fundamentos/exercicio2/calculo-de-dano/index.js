
//Personagem Ataque
const personagemDeAtaque = prompt('Informe o nome do personagem de ataque: ')
const poderDeAtaque = parseInt(prompt(`Informe a quantidade de poder de ataque do personagem ${personagemDeAtaque}: `))


//Personagem defesa
const personagemDeDefesa = prompt('Informe o nome do personagem de defesa:')
const poderDeDefesa = parseInt(prompt(`Informe a quantidade de poder de defesa do personagem ${personagemDeDefesa}: `))
const pontosDeVida = parseInt(prompt(`Informe a quantidade de pontos de vida do personagem de defesa ${personagemDeDefesa}: `))
const shield = prompt(`O personagem de defesa ${personagemDeDefesa} possui escudo? S/N`)

//Diferença dano sem escudo
const diferençaAtaqueDefesa = poderDeAtaque - poderDeDefesa
//Diferença dano com escudo
const diferençaAtaqueDefesaShield = (poderDeAtaque - poderDeDefesa) / 2
//Pontos de vida perdidos sem escudo
const vidaPersonagemDefesa = pontosDeVida - diferençaAtaqueDefesa
//Pontos de vida perdidos com escudo
const vidaPersonagemDefesaShield = pontosDeVida - diferençaAtaqueDefesaShield
let shieldConfirm


if (shield === 's' || shield === 'S') {
    shieldConfirm = '100%'
} else {
    shieldConfirm = '0%'
}

alert(`
*** STATUS PERSONAGENS ***

-- ${personagemDeAtaque} --
Poder de ataque: ${poderDeAtaque}


-- ${personagemDeDefesa} --
Poder de defesa: ${poderDeDefesa}
Quantidade de vida: ${pontosDeVida}
Escudo: ${shieldConfirm}
`)


if ((poderDeAtaque > poderDeDefesa) && (shield === 'n' || shield === 'N')) {

    alert(`
    *** COMBATE ***
    Dano sofrido personagem de defesa ${personagemDeDefesa}: ${diferençaAtaqueDefesa}
    Pontos de vida atual ${vidaPersonagemDefesa}

    `)
} else if ((poderDeAtaque > poderDeDefesa) && (shield === 's' || shield === 'S')) {
    alert(`
    *** COMBATE ***
    Dano sofrido personagem de defesa ${personagemDeDefesa}: ${diferençaAtaqueDefesaShield}
    Pontos de vida atual ${vidaPersonagemDefesaShield}

    `)
} else {
    alert(`
    O personagem de defesa ${personagemDeDefesa} não sofreu nenhum tipo de dano, pois o personagem de ataque não possui poder de ataque suficiente para atingí-lo.
    `)
}