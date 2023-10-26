const addTech = document.getElementById('addTech')
const listDevs = []
let listNamesTech = []
let listExperienceTech = []
const opcoes = ['0-2 anos', '3-4 anos', '5+ anos']
let contTech = 0

addTech.addEventListener('click', addTechFunction)

function addTechFunction(ev) {
    ev.preventDefault()
    const featuresTech = document.getElementById('featuresTech')
    const divMain = document.createElement('div')
    featuresTech.append(divMain)
    divMain.id = 'divMain'
    addTechName(divMain)
    addTimeExperience(divMain)
    contTech++
    const submitDev = document.getElementById('submitDev')
    submitDev.addEventListener('click', addSubmitDev)
    console.log(listDevs)
}

function addTechName(divMain) {
    const liTechName = document.createElement('li')
    liTechName.style = 'margin: 20px'
    divMain.append(liTechName)
    const labelTechName = document.createElement('label')
    labelTechName.setAttribute('for', `selectTechName${contTech}`)
    labelTechName.innerText = 'Nome da Tecnologia: '
    liTechName.append(labelTechName)
    const inputTechName = document.createElement('input')
    inputTechName.id = `selectTechName${contTech}`
    inputTechName.type = 'text'
    inputTechName.name = 'nameTech'
    liTechName.append(inputTechName)
}

function addTimeExperience(divMain) {
    const liTimeExperience = document.createElement('li')
    liTimeExperience.style = 'margin: 20px 20px 30px 20px'
    divMain.append(liTimeExperience)
    const labelTimeExperience = document.createElement('label')
    labelTimeExperience.setAttribute('for', 'selectTimeExperience')
    labelTimeExperience.innerText = 'Tempo de Experiência: '
    liTimeExperience.append(labelTimeExperience)
    addOptionsTimeExperience(liTimeExperience)
    addButtonRemove(divMain)
}

function addOptionsTimeExperience(liTimeExperience) {
    for (let ind = 0; ind < opcoes.length; ind++) {
        const inputTimeExperienceOptions = document.createElement('input')
        inputTimeExperienceOptions.id = `selectTimeExperienceOptions${contTech}_${ind}`
        inputTimeExperienceOptions.type = 'radio'
        inputTimeExperienceOptions.name = `timeExperienceOptions${contTech}`
        inputTimeExperienceOptions.value = opcoes[ind]
        liTimeExperience.append(inputTimeExperienceOptions)
        const labelTimeExperienceOptions = document.createElement('label')
        labelTimeExperienceOptions.innerText = opcoes[ind]
        labelTimeExperienceOptions.setAttribute('for', `selectTimeExperienceOptions${contTech}_${ind}`)
        liTimeExperience.append(labelTimeExperienceOptions)

    }

}

function addButtonRemove(divMain) {
    const liButtonRemove = document.createElement('li')
    divMain.append(liButtonRemove)
    const buttonRemove = document.createElement('button')
    buttonRemove.innerText = 'Remover'
    liButtonRemove.append(buttonRemove)
    buttonRemove.addEventListener('click', function (ev) {
        ev.preventDefault()
        const parent = ev.currentTarget.parentNode.parentNode
        parent.remove()
    })
}

function addSubmitDev(ev) {
    ev.preventDefault()
    const inputFullName = document.querySelector('input[name="fullName"]')
    const fullName = inputFullName.value
    const inputNameTech = document.querySelectorAll('input[name="nameTech"]')
    inputNameTech.forEach(function (element) {
        listNamesTech.push(element.value)
    })

    for (let ind = 0; ind < contTech; ind++) {
        const valueTimeExperience = document.querySelector(`input[name="timeExperienceOptions${ind}"]:checked`)
        if (valueTimeExperience) {
            listExperienceTech.push(valueTimeExperience.value)
        }
    }
    listDevs.push({ fullname: fullName, namesTechs: listNamesTech, timeExperience: listExperienceTech })
    alert('Dev cadastrado com sucesso!')
    inputFullName.value = ''
    deleteDivMain()
}

function deleteDivMain() {
    const divMain = document.querySelectorAll('#divMain')
    divMain.forEach(function (element) {
        element.remove()
    })
    listExperienceTech = []
    listNamesTech = []
}