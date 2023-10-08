const addTech = document.getElementById('addTech')

addTech.addEventListener('click', addTechFunction)

function addTechFunction(ev) {
    ev.preventDefault()
    const formDev = document.getElementById('formDev')
    const divTech = document.createElement('div')
    divTech.id = 'styleDivTech'
    formDev.append(divTech)

    const divNameTech = document.createElement('div')
    divNameTech.id = 'styleDivNameTech'
    divTech.append(divNameTech)
    divNameTech.innerHTML = '<label for="selectNameTech">Nome da Tecnologia: </label>'
    const inputNameTech = document.createElement('input')
    inputNameTech.id = 'selectNameTech'
    inputNameTech.name = 'nameTech'
    inputNameTech.type = 'text'
    divNameTech.append(inputNameTech)

    const divExperienceTech = document.createElement('div')
    divExperienceTech.id = 'styleDivExperienceTech'
    divTech.append(divExperienceTech)
    divExperienceTech.innerHTML = '<label for="selectExperienceTech">Tempo de experiência: </label'
    const inputExperienceTech = document.createElement('input')
    inputExperienceTech.id = 'selectExperienceTech'
    inputExperienceTech.name = 'experienceTech'
    inputExperienceTech.type = 'number'
    divExperienceTech.append(inputExperienceTech)

    const buttonAddNameExperience = document.createElement('button')
    buttonAddNameExperience.id = 'buttonAddNameExperience'
    buttonAddNameExperience.innerText = 'Enviar Tecnologia'
    buttonAddNameExperience.onclick = function () {
        const name = inputNameTech.value
        const experience = inputExperienceTech.value

        console.log(`
        name adicionado = ${name}
        exp adicionado = ${experience}
        `)
        return false
    }
    divTech.append(buttonAddNameExperience)

    const buttonRemoveNameExperience = document.createElement('button')
    buttonRemoveNameExperience.id = "buttonRemoveNameExperience"
    buttonRemoveNameExperience.innerText = 'Remover Tecnologia'
    buttonRemoveNameExperience.onclick = function () {
        const name = inputNameTech.value
        const experience = inputExperienceTech.value

        console.log(`
        name removido = ${name}
        exp removido = ${experience}
        `)

        return false
    }
    divTech.append(buttonRemoveNameExperience)
}