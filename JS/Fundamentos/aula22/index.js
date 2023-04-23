const turista = prompt("Informe o seu nome: ")

let visita = prompt("Já visitou alguma cidade? (s/n)")

let cidades

let cont = 0

if (visita == 's') {
  let cidade = prompt("Qual o nome da cidade visitada? ")
  cidades = cidade + ','
  cont += 1
  while (visita == 's'){
    visita = prompt("Já visitou alguma outra cidade? (s/n)")
    if (visita == 's') {
      let cidade = prompt("Qual o nome da cidade visitada? ")
      cidades += cidade + ','
      cont += 1
    } else {
      visita == 'n'
    }
  }

  if (cont == 1) {
    alert(`${turista} você visitou ${cont} cidade`)
    alert(`Cidade visitada: ${cidades}`)
  } else {
    alert(`${turista} você visitou ${cont} cidades`)
    alert(`Cidades visitadas: ${cidades}`)
  }
  
} else {
  alert("Não visitou nenhuma cidade")
}