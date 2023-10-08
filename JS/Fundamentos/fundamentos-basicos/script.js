const validate = document.getElementById('validateData')

validate.addEventListener('click', getPassword)

function getPassword(ev) {
    const body = ev.currentTarget.parentNode
    const password = body.children.selectPassword.value
    const passwordConfirm = body.children.selectPasswordConfirm.value

    validatePassword(password, passwordConfirm)
}

function validatePassword(password1, password2) {
    if (password1 === password2) {
        alert('Login confirmado')
    } else {
        alert('Senha não confirmada')
    }
}
