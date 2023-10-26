const click = document.getElementById('click')

click.addEventListener('click', function () {
    const input = document.getElementById('input')
    input.dataset.teste = 'valor'
    console.log(input)
    input.placeholder = input.dataset.teste

    input.placeholder = input.dataset.azulBranco
    input.blue = 'verde'
    const x = input.blue
    console.log(x)
})