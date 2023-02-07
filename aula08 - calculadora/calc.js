const input = document.getElementById('input')
const switchBtn = document.querySelector('.switchBtn')
const copyToClipboard = document.getElementById('copyToClipboard')
const resultInput = document.getElementById('result')
const equalBtn = document.getElementById('equal')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', function() {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})



switchBtn.addEventListener('click', function () {
  document.body.classList.toggle('isDark')
  document.body.classList.toggle('isLight')
})

document.getElementById('clear').addEventListener('click', function () {
  input.value = ''
})

input.addEventListener('keydown', function (ev) {
  if(allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === 'Backspace') {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === 'Enter') {
    calculate()
  }
})

document.getElementById('equal').addEventListener('click', calculate)

function calculate () {
  resultInput.value = 'ERROR'
  resultInput.classList.add('error')
  const result = eval(input.value)
  resultInput.value = result
  resultInput.classList.remove('error')

}