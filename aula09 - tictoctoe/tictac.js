const btnStart = document.getElementById('btnStart')
let turnPlayerName = ''
btnStart.addEventListener('click', function () {
  document.getElementById('players-container').classList = 'hidden'
  document.getElementById('game-container').classList = ''
  let player1 = document.getElementById('player1').value
  let player2 = document.getElementById('player2').value
  document.getElementById('listPlayers').innerText = player1 + '  VS  ' + player2
  turnPlayerName = document.getElementById('turnPlayerName')
  turnPlayerName.innerText = "It's " + player1 + "'s turn"
})


  
let cellClick = document.querySelectorAll('.boardOption').forEach(function (opt) {
  
  function test () {
    if (turnPlayerName.innerText ==  ("It's " + player1 + "'s turn")) {
      const p1 = opt.addEventListener('click', function () {
        if (opt.innerText == '') {
          opt.innerText = 'X'  
        } else {
          // Aciona função de a célula piscar em vermelho
        }
        turnPlayerName.innerText = ("It's " + player2 + "'s turn")
      })
    } else {
      const p2 = opt.addEventListener('click', function () {
        if (opt.innerText == '') {
          opt.innerText = 'O'  
        } else {
          // Aciona função de a célula piscar em vermelho
        }
        turnPlayerName.innerText = "It's " + player1 + "'s turn"
      })
    }
  }
})

cellClick.addEventListener('click', test())

/* function clickedFnct (ev) {
  
} */