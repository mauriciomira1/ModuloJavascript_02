document.getElementById('sessionBtn').addEventListener('click', function (){
  const input = document.getElementById('session')
  sessionStorage.setItem('info', input.value)
  input.value = ''
} )

document.getElementById('readSession').addEventListener('click', function () {
  const info = sessionStorage.getItem('info')
  alert('A informação é ' + info)
})

const test = document.getElementById('sessionBtn')
test.app


document.getElementById('localBtn').addEventListener('click', function (){
  const input = document.getElementById('local')
  localStorage.setItem('infoLocal', input.value)
  input.value = ''
} )

document.getElementById('readLocal').addEventListener('click', function () {
  const info = localStorage.getItem('infoLocal')
  alert('A informação é ' + info)
})

document.getElementById('cookieBtn').addEventListener('click', function () {
  const input = document.getElementById('cookie')
  // cookieName = value; expires=UTCStringDate; path=/;
  const cookie = 'info=' + input.value + ';'
  const expiration = 'expires=' + new Date(2023, 03, 11) + ';'
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
})
