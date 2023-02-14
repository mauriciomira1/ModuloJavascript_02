import { calculate } from './modCalculate.js'
import modLightDark from './modLightDark.js'


const input = document.getElementById('input')
const switchBtn = document.querySelector('.switchBtn')
const copyToClipboard = document.getElementById('copyToClipboard')
const equalBtn = document.getElementById('equal')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener('click', function() {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

switchBtn.addEventListener('click', modLightDark)

document.getElementById('clear').addEventListener('click', function () {
  input.value = ''
})

input.addEventListener('keydown', function (ev) {
  ev.preventDefault()
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

copyToClipboard.addEventListener('click', function () {
  const resultValue = document.getElementById('result')
  navigator.clipboard.writeText(resultValue.value)
  if (copyToClipboard.innerText == 'Copy') {
    copyToClipboard.classList.add('success')
    copyToClipboard.innerText = 'Copied!'
  } else {copyToClipboard.innerText = 'Copy'
  copyToClipboard.classList.remove('success')
  copyToClipboard.innerText = 'Copy'
}
})