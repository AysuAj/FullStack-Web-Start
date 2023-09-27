let ind = 0
let string = ''
let num


function chunck() {
    if (ind == 0) {
        num = prompt('Informe um número: ')
    }
    if (ind < num) {
        string += 'chunck '
        ind++
        chunck()

    } else {
        alert(string)
    }
}

chunck()