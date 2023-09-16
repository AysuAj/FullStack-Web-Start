const modeloPrimeiroVeiculo = prompt('Informe o modelo do primeiro veículo: ')
const velocidadePrimeiroVeiculo = prompt(`Informe a velocidade do veículo ${modeloPrimeiroVeiculo} em KM/h: `)

const modeloSegundoVeiculo = prompt('Informe o modelo do segundo veículo: ')
const velocidadeSegundoVeiculo = prompt(`Informe a velocidade do veiculo ${modeloSegundoVeiculo} em KM/h: `)

const diferencaVelodidadePrimeiroVeiculo = velocidadePrimeiroVeiculo - velocidadeSegundoVeiculo
const diferencaVelocidadeSegundoVeiculo = velocidadeSegundoVeiculo - velocidadePrimeiroVeiculo

if (velocidadePrimeiroVeiculo > velocidadeSegundoVeiculo) {
    alert(`
    ${modeloPrimeiroVeiculo} é mais rápido do que o ${modeloSegundoVeiculo};

    O ${modeloPrimeiroVeiculo} tem a velocidade de ${velocidadePrimeiroVeiculo}KM/h
    enquanto o ${modeloSegundoVeiculo} tem ${velocidadeSegundoVeiculo}KM/h;

    A diferença de velocidade entre os 2 modelos é de ${diferencaVelodidadePrimeiroVeiculo}KM/h.
    `)

} else if (velocidadeSegundoVeiculo > velocidadePrimeiroVeiculo) {
    alert(`
    ${modeloSegundoVeiculo} é mais rápido do que o ${modeloPrimeiroVeiculo};

    O ${modeloSegundoVeiculo} tem a velocidade de ${velocidadeSegundoVeiculo}KM/h
    enquanto o ${modeloPrimeiroVeiculo} tem ${velocidadePrimeiroVeiculo}KM/h;

    A diferença de velocidade entre os 2 modelos é de ${diferencaVelocidadeSegundoVeiculo}KM/h.
    `)

} else {
    alert(`
    O ${modeloPrimeiroVeiculo} tem a mesma velocidade do ${modeloSegundoVeiculo};

    Velocidade dos 2 veículos é de ${velocidadePrimeiroVeiculo}KM/h.
    `)
}