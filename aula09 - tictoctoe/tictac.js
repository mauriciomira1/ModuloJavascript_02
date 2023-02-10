const btnStart = document.getElementById('btnStart')
let turnPlayerName = ''
const arrayP1 = []
const arrayP2 = []
let boardOption = document.querySelectorAll('.boardOption')
let vBoard = []
btnStart.addEventListener('click', function () {
  document.getElementById('players-container').classList = 'hidden'
  document.getElementById('game-container').classList = ''
  let player1 = document.getElementById('player1').value
  let player2 = document.getElementById('player2').value
  document.getElementById('listPlayers').innerText = player1 + '  VS  ' + player2
  turnPlayerName = document.querySelector('.turnPlayerName')
  turnPlayerName.innerText = "It's " + player1 + "'s turn"
  vBoard = [['' , '' , ''], ['' , '' , ''], ['' , '' , '']]
  
})


boardOption.forEach(function (opt) {
  opt.addEventListener('click', function () {
    const region = opt.dataset.region
    const rowColumnPair = region.split('.')
    const row = rowColumnPair[0]
    const column = rowColumnPair[1]
    if (turnPlayerName.id == 'p1') {
      if (opt.innerText == '') {
        opt.innerText = 'X'
        vBoard[row][column] = 'X'

        let winRegions = getWinRegions()
        if (winRegions.length > 0) {
          alert('Temos um vencedor!')
        } else if (vBoard.flat().includes('')) {
          turnPlayerName.innerText = "It's " + player2.value + "'s turn"
          turnPlayerName.id = 'p2'
        } else { 
          alert('EMPATE!!!')
        }
        
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
      

    } else {
      
        if (opt.innerText == '') {
          opt.innerText = 'O'
          vBoard[row][column] = 'O'
          
          let winRegions = getWinRegions()
        if (winRegions.length > 0) {
          alert('Temos um vencedor!')
        } else if (vBoard.flat().includes('')) {
          turnPlayerName.innerText = "It's " + player1.value + "'s turn"
          turnPlayerName.id = 'p1'
        } else { 
          alert('EMPATE!!!')
        }
         
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
    }
    console.clear()
    console.table(vBoard)

  })
})

/* function winner (ev) {

} */

// Verifica se existem três regiões iguais em sequência e devolve as regiões
function getWinRegions() {
  let winRegions = []
  if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
    winRegions.push("0.0", "0.1", "0.2")
  if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
    winRegions.push("1.0", "1.1", "1.2")
  if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
    winRegions.push("2.0", "2.1", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
    winRegions.push("0.0", "1.0", "2.0")
  if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
    winRegions.push("0.1", "1.1", "2.1")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
    winRegions.push("0.2", "1.2", "2.2")
  if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
    winRegions.push("0.0", "1.1", "2.2")
  if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
    winRegions.push("0.2", "1.1", "2.0")
  return winRegions
}

function handleBoardClick (ev) {

}

function restartGame () {
  document.getElementById('players-container').classList.remove('hidden')
  document.getElementById('game-container').classList = 'hidden'
  boardOption.forEach(function(){
    boardOption.innerText = ''
  })
  
/*   boardOption.innerText = '' */
  player1.value = ''
  player2.value = ''
}