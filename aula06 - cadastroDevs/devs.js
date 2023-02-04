
const registerForm = document.getElementById('registerForm')
const newTech = document.getElementById('addTechButton')
const removeButton = document.getElementById('removeButton')
let i = 0

const addTechButton = document.getElementById('addTechButton')
const registerButton = document.getElementById('registerButton')
const devName = document.getElementById('devName')

/* function newTech () {
  const newTechItem = document.getElementById('containerItens')
  const newTechName = document.createElement('label')
  newTechName.id = 'newTechName'
  newTechName.innerText = 'Nome da Tecnologia: '
  newTechName.name = 'newTechItem'
  const newTechInput = document.createElement('input')
  newTechInput.id = 'newTechInput'
  newTechInput.type = 'text'
  newTechInput.name = 'newTechItem'
  newTechItem.append(newTechName, newTechInput)
} */


/* 
registerForm.addEventListener('addTechButton', (ev) => {


})
 */


newTech.addEventListener('click', (ev) => {
  let indexI = i
  indexI++

  const newTechItem = document.getElementById('containerItens')
  const newTechName = document.createElement('label')
  newTechName.id = 'newTechName' + indexI
  newTechName.name = 'newTechItem' + indexI
  newTechName.innerText = '\nNome da Tecnologia: '
  newTechName.name = 'newTechItem' + indexI
  
  const newTechInput = document.createElement('input')
  newTechInput.id = 'newTechInput' + indexI
  newTechInput.type = 'text'
  newTechInput.name = 'newTechItem' + indexI
  
  const expTimeTitle = document.createElement('p')
  expTimeTitle.innerText = 'Tempo de experiência:'

  const expTimeInput02 = document.createElement('input')
  expTimeInput02.type = 'radio'
  expTimeInput02.value = '0-2 anos'
  expTimeInput02.id = '02exp' + indexI
  expTimeInput02.name = 'exp' + indexI



  const expTimeLabel02 = document.createElement('label')
  expTimeLabel02.innerText = '0-2 anos'
  expTimeLabel02.setAttribute('for', '02exp')

  const expTimeInput34 = document.createElement('input')
  expTimeInput34.type = 'radio'
  expTimeInput34.value = '3-4 anos'
  expTimeInput34.id = '34exp' + indexI
  expTimeInput34.name = 'exp' + indexI



  const expTimeLabel34 = document.createElement('label')
  expTimeLabel34.innerText = '3-4 anos'
  expTimeLabel34.setAttribute('for', '34exp')

  const expTimeInput5plus = document.createElement('input')
  expTimeInput5plus.type = 'radio'
  expTimeInput5plus.value = '5+ anos'
  expTimeInput5plus.id = '5plus' + indexI
  expTimeInput5plus.name = 'exp' + indexI



  const expTimeLabel5plus = document.createElement('label')
  expTimeLabel5plus.innerText = '5+ anos\n'
  expTimeLabel5plus.setAttribute('for', '5plus')

  const removeButton = document.createElement('button')
  removeButton.innerText = 'Remover'
  removeButton.id = 'removeButton' + indexI
  removeButton.type = 'button' + indexI
  removeButton.setAttribute('onclick','removeButtonClick()')



  const listItens = document.createElement('div')
  listItens.id = 'listItens' + i

  listItens.append(newTechName, newTechInput, expTimeTitle, expTimeInput02, expTimeLabel02, expTimeInput34, expTimeLabel34, expTimeInput5plus, expTimeLabel5plus, removeButton)

  newTechItem.appendChild(listItens)
  i++

})

function removeButtonClick(ev) {
  ev.preventDefault()
  const buttonRemove = document.getElementById('removeButton' + i)
  buttonRemove.parentElement[i].style.display = 'none'
}