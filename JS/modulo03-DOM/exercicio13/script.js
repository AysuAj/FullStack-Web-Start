const element = document.querySelectorAll('.data-element')
let alternator = 1

function main() {
    element.forEach(function (element) {
        element.addEventListener('click', function (ev) {
            if (alternator == 1) {
                markX(ev)
            } else if (alternator == 2) {
                markY(ev)
            }
        })
    })
}

function markX(ev) {
    let playerX = ev.currentTarget
    if (playerX.innerText === 'X' || playerX.innerText === 'O') {

    } else {
        playerX.innerText = 'X'
    }
    validateX()
    alternator = 2
}

function markY(ev) {
    let playerY = ev.currentTarget
    if (playerY.innerText === 'O' || playerY.innerText === 'X') {

    } else {
        playerY.innerText = 'O'
    }
    alternator = 1
}

function validateX() {
    const element = document.querySelectorAll('.data-element')
    if ((element[0].innerText === 'X' && element[1].innerText === 'X' && element[2].innerText === 'X') || (element[0].innerText === 'X' && element[4].innerText === 'X' && element[8].innerText === 'X') || (element[0].innerText === 'X' && element[3].innerText === 'X' && element[6].innerText === 'X') || (element[0].innerText === 'X' && element[1].innerText === 'X' && element[2].innerText === 'X')) {
        console.log('teste')
    }
}

main()