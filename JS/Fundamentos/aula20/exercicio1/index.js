let veiculo1 = prompt("Informe o nome do primeiro veículo: ")
let velocidade1 = prompt("Informe a velocidade do primeiro veículo: ")
let veiculo2 = prompt("Informe o nome do segundo veículo: ")
let velocidade2 = prompt("Informe a velocidade do segundo veículo: ")

if (velocidade1 > velocidade2) {
  alert(`O veículo ${veiculo1} é mais rápido que o veículo ${veiculo2}`)
} else if (velocidade2 > velocidade1) {
  alert(`O veículo ${veiculo2} é mais rápido que o veículo ${veiculo1}`)
} else {
  alert(`O veículo ${veiculo1} e o veículo ${veiculo2} tem a mesma velocidade`)
}