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

const resultAttack = powerofAttack - pointsOfDef;
const resultAttackS = resultAttack / 2;

if (powerofAttack > pointsOfDef && shield === false) {
  alert(
    `O personagem ${nameCharacterAttack} deu ${resultAttack} de dano no personagem ${nameCharacterDef}`
  );
} else if (powerofAttack > pointsOfDef && shield === true) {
  alert(
    `O personagem ${nameCharacterAttack} deu ${
      resultAttack / 2
    } de dano no personagem ${nameCharacterDef}`
  );
}
