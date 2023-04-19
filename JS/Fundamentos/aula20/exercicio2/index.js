let resultAttack = 0;
let resultAttackS = 0;
let realAttack = 0;
let resultAttacklife = 0;
let wordShield;

let nameCharacterAttack = prompt("Informe o nome do Personagem de ataque: ");
let powerofAttack = prompt(
  `Informe o poder de ataque do personagem ${nameCharacterAttack}: `
);

let nameCharacterDef = prompt("Informe o nome do Personagem de defesa: ");
let pointsOfLife = prompt(
  `Informe a quantidade de pontos de vida do personagem ${nameCharacterDef}: `
);
let pointsOfDef = prompt(
  `Informe quantos pontos de defesa tem esse personagem: ${nameCharacterDef}`
);
let shield = prompt(
  `O personagem ${nameCharacterDef} possui escudo? (Sim/Nao ou (S/N): ) `
);

resultAttack = powerofAttack - pointsOfDef;
resultAttackS = resultAttack / 2;

powerofAttack = parseInt(powerofAttack)
pointsOfDef = parseInt(pointsOfDef)

if ((shield == 'Sim') || shield == 's') {
  wordShield = "Sim";
} else {
  wordShield = "Nao";
}

if ((powerofAttack > pointsOfDef) && (shield == 2)) {
  alert(
    `O personagem ${nameCharacterAttack} deu ${resultAttack} de dano no personagem ${nameCharacterDef}`
  );

  resultAttacklife = pointsOfLife - resultAttack;
  realAttack = resultAttack;
} else if ((powerofAttack > pointsOfDef) && (shield == 1)) {
  alert(
    `O personagem ${nameCharacterAttack} deu ${
      resultAttack / 2
    } de dano no personagem ${nameCharacterDef}`
  );
  resultAttacklife = pointsOfLife - resultAttackS;
  realAttack = resultAttackS;
} else {
  alert(`O dano causodo pelo personagem ${nameCharacterAttack} foi de 0`);
}

alert(`-- Pers. Ataque --\n
      Nome do personagem de ataque ${nameCharacterAttack}\n
      Poder de ataque do personagem de ataque ${powerofAttack}\n
      -- Pers. Defesa --\n
      Nome do personagem de defesa ${nameCharacterDef}\n
      Pontos vida do personagem de defesa ${pointsOfLife}\n
      Pontos de defesa do personagem de defesa ${pointsOfDef}\n
      O personagem de defesa tem escudo? ${wordShield}\n
      -- Batalha --\n
      O personagem de ataque deu ${realAttack} de dano\n
      O personagem de defesa ficou com ${resultAttacklife} de pontos de vida\n`);
