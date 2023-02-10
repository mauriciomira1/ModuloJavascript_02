const btnStart = document.getElementById('btnStart')
let turnPlayerName = ''
const arrayP1 = []
const arrayP2 = []
btnStart.addEventListener('click', function () {
  document.getElementById('players-container').classList = 'hidden'
  document.getElementById('game-container').classList = ''
  const player1 = document.getElementById('player1').value
  const player2 = document.getElementById('player2').value
  document.getElementById('listPlayers').innerText = player1 + '  VS  ' + player2
  turnPlayerName = document.querySelector('.turnPlayerName')
  turnPlayerName.innerText = "It's " + player1 + "'s turn"
})



document.querySelectorAll('.boardOption').forEach(function (opt) {
  opt.addEventListener('click', function () {
    if (turnPlayerName.id == 'p1') {
      arrayP1.push(opt.id)
      
      if (opt.innerText == '') {
        opt.innerText = 'X'
      } else {
        opt.animate(
          [
            { color: '#431236', offset: 0.3 }
          ], {
            duration: 200,
            iterations: 3
          }
        )
      }
      
      turnPlayerName.innerText = "It's " + player2.value + "'s turn"
      turnPlayerName.id = 'p2'
    } else {
        arrayP2.push(opt.id)
      
        if (opt.innerText == '') {
          opt.innerText = 'O'
        } else {
          opt.animate(
            [
              { color: '#431236', offset: 0.3 }
            ], {
              duration: 200,
              iterations: 3
            }
          )
        }

        turnPlayerName.innerText = "It's " + player1.value + "'s turn"
        turnPlayerName.id = 'p1'
    }
  })
})