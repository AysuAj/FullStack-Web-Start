const resultAttack = 0;
const resultAttackS = 0;
const realAttack = 0;
const resultAttacklife = 0;

const nameCharacterAttack = prompt("Informe o nome do Personagem de ataque: ");
const powerofAttack = prompt(
  `Informe o poder de ataque do personagem ${nameCharacterAttack}: `
);

const nameCharacterDef = prompt("Informe o nome do Personagem de defesa: ");
const pointsOfLife = prompt(
  `Informe a quantidade de pontos de vida do personagem ${nameCharacterDef}: `
);
const pointsOfDef = prompt(
  `Informe quantos pontos de defesa tem esse personagem: ${nameCharacterDef}`
);
const shield = prompt(
  `O personagem ${nameCharacterDef} possui escudo? 1 para sim | 2 para não: `
);

resultAttack = powerofAttack - pointsOfDef;
resultAttackS = resultAttack / 2;

if (shield == 1) {
  const wordShield = "Sim";
} else {
  wordShield == "Nao";
}

if (powerofAttack > pointsOfDef && shield === false) {
  alert(
    `O personagem ${nameCharacterAttack} deu ${resultAttack} de dano no personagem ${nameCharacterDef}`
  );

  resultAttacklife = pointsOfLife - resultAttack;
  realAttack = resultAttack;
} else if (powerofAttack > pointsOfDef && shield === true) {
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
      ---\n
      -- Pers. Defesa --\n
      Nome do personagem de defesa ${nameCharacterDef}\n
      Pontos vida do personagem de defesa${pointsOfLife}\n
      Pontos de defesa do personagem de defesa ${pointsOfDef}\n
      O personagem de defesa tem escudo? ${wordShield}\n
      ---\n
      -- Batalha --\n
      O personagem de ataque deu ${realAttack} de dano\n
      O personagem de defesa tomou ${resultAttacklife} de pontos de vida`);
