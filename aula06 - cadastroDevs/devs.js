
const newTech = document.getElementById('addTechButton')
const removeButton = document.getElementById('removeButton')
let i = 0
const developers = []


function newLabel (innerText, htmlFor) {
  const newTechName = document.createElement('label')
  newTechName.innerText = innerText
  newTechName.htmlFor = htmlFor
  return newTechName
}

function newInput (name, id, value, type = 'text') {
  const newTechInput = document.createElement('input')
  newTechInput.name = name
  newTechInput.id = id
  newTechInput.value = value
  newTechInput.type = type
  return newTechInput
}


newTech.addEventListener('click', (ev) => {
  let indexI = i
  const containerItens = document.getElementById('containerItens')
  const listItens = document.createElement('div')
  i++
  listItens.id = 'listItens-' + indexI
  listItens.className = 'listItens'


  const newTechIndex = 'newTechItem'
  const newTechName = newLabel('Nome: ', newTechIndex)
  const newInputName = newInput(newTechIndex, newTechIndex, null, 'text')
  
  const expTimeTitle = newLabel(' Experiência: ', 'exp' + indexI)

  const expTimeInput02 = newInput('exp' + indexI, '02exp' + indexI + '.1', '0-2 anos', 'radio')
  const expTimeLabel02 = newLabel('0-2 anos', '02exp' + indexI + '.1')

  const expTimeInput34 = newInput('exp' + indexI, '34exp' + indexI + '.2', '3-4 anos', 'radio')
  const expTimeLabel34 = newLabel('3-4 anos', '34exp' + indexI + '.2')

  const expTimeInput5plus = newInput('exp' + indexI, '5plus' + indexI + '.3', '5+ anos', 'radio')
  const expTimeLabel5plus = newLabel('5+ anos', '5plus' + indexI + '.3')
  
  const removeButton = document.createElement('button')
  removeButton.innerText = 'Remover'
  removeButton.id = 'removeButton' + indexI
  removeButton.type = 'button' + indexI
  removeButton.className = 'removeButton'
  removeButton.addEventListener('click', () => {
    containerItens.removeChild(listItens)
  })
  
  listItens.append(newTechName, newInputName, expTimeTitle, expTimeInput02, expTimeLabel02, expTimeInput34, expTimeLabel34, expTimeInput5plus, expTimeLabel5plus, removeButton)
  containerItens.appendChild(listItens)


})

registerForm.addEventListener('submit', function(ev) {
  ev.preventDefault()
  let devName = document.getElementById('devName')
  let expTime = document.querySelectorAll('.listItens')
  let technologies = []
  
  expTime.forEach(function (row) {
    const experienceName = document.querySelector('#' + row.id + ' input[name="newTechItem"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push({name: experienceName, exp: techExp})
  })
  
  const newDev = {devName: devName.value,  technologies: technologies}
  developers.push (newDev)
  alert('Dev cadastrado com sucesso!')

  devName.value = ''
  expTime.forEach( function (row) {
    row.remove()
  })

  console.log(developers)
})


//CSS functions

function darkTheme {

}

function lightTheme {

}

function changeTheme {

}

const lightTheme = document.getElementById('lightTheme')
lightTheme.addEventListener('click', lightTheme)

const darkTheme = document.getElementById('darkTheme')
darkTheme.addEventListener('click', darkTheme)

const changeTheme = document.getElementById('changeTheme')
changeTheme.addEventListener('click', changeTheme)