/* 
Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:

- Escalar um jogador
    - Informar a posição do jogador a ser escalado para o time.
    - Informar o nome do jogador.
    - Informar o número da camisa do jogador.
    - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
    - Após o jogador ser escalado os campos de texto devem ser limpos.
- Remover um jogador
    - Informar o número da camisa do jogador.
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.

Dica: lembrando que é possível acessar o texto de um input através da propriedade value.
 */

const players = []
const container = document.querySelector('.container-itens')

function addPlayer () {
  
  
  const ul = document.createElement('ul')
  ul.className = 'newPlayer'

  const liPosition = document.createElement('li')
  liPosition.className = 'position styleNewItem'
  liPosition.innerText = 'Posição do Jogador: '

  const inputPosition = document.createElement('input')
  inputPosition.type = 'text'
  inputPosition.id = 'position'

  const liName = document.createElement('li')
  liName.className = 'name styleNewItem'
  liName.innerText = 'Nome do Jogador: '


  const inputName = document.createElement('input')
  inputName.type = 'text'
  inputName.id = 'name'

  const liNumber = document.createElement('li')
  liNumber.className = 'number styleNewItem'
  liNumber.innerText = 'Número da Camisa: '

  const inputNumber = document.createElement('input')
  inputNumber.type = 'number'
  inputNumber.id = 'number'

  const confirmButton = document.createElement('button')
  confirmButton.innerText = 'Escalar'
  confirmButton.id = 'climbButton'
  confirmButton.setAttribute('onclick','climbButton()')


    
  liPosition.appendChild(inputPosition)
  liName.appendChild(inputName)
  liNumber.appendChild(inputNumber)
  ul.append(liPosition, liName, liNumber,confirmButton)
  container.appendChild(ul)
}



function climbButton () {
  const position = document.getElementById('position')
  const name = document.getElementById('name')
  const number = document.getElementById('number')
  const textNewPlayer = document.createElement('p')
  const confirmButton = document.getElementById('climbButton')
  textNewPlayer.innerText = (
    'Novo Jogador: ' + name.value +
    '\nPosição: ' + position.value +
    '\nNúmero: ' + number.value   ) 
    
  const sendButton = document.createElement('button')
  sendButton.innerText = 'Confirmar'
  sendButton.id = 'sendButton'
  sendButton.setAttribute('onclick', 'sendNew()')

  confirmButton.className = 'hidden'
  container.append(textNewPlayer, sendButton)
  
}

function sendNew() {
      
  const position = document.getElementById('position')
  const name = document.getElementById('name')
  const number = document.getElementById('number')

  players.push({'position': position.value, 'name': name.value, 'number': number.value})
  const containerInputs = document.getElementsByClassName('newPlayer')
  containerInputs = ''

  position.value = ''
  name.value = ''
  number.value = ''
  console.log(players)
  console.log(position)
}

function removePlayer () {

}