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

function addPlayer () {
  const container = document.querySelector('.container-itens')
  
  const ul = document.createElement('ul')
  ul.className = 'newPlayer'

  const liPosition = document.createElement('li')
  liPosition.className = 'position'
  liPosition.innerText = 'Posição do Jogador: '
  liPosition.className = 'styleNewItem'

  const inputPosition = document.createElement('input')
  inputPosition.type = 'text'

  const liName = document.createElement('li')
  liName.className = 'name'
  liName.innerText = 'Nome do Jogador: '
  liName.className = 'styleNewItem'

  const inputName = document.createElement('input')
  inputName.type = 'text'

  const liNumber = document.createElement('li')
  liNumber.className = 'number'
  liNumber.innerText = 'Número da Camisa: '
  liNumber.className = 'styleNewItem'

  const inputNumber = document.createElement('input')
  inputNumber.type = 'number'

  const sendButton = document.createElement('button')
  sendButton.innerText = 'Escalar'
  sendButton.id = 'sendButton'
  sendButton.setAttribute(onclick='sendNew')
  
  liPosition.appendChild(inputPosition)
  liName.appendChild(inputName)
  liNumber.appendChild(inputNumber)
  ul.append(liPosition, liName, liNumber,sendButton)
  container.appendChild(ul)
}

function sendNew() {
  
}

function removePlayer () {

}