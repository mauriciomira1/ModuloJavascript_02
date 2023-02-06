function changeInput () {

}

document.getElementById('value').addEventListener('click', function () {
  const input = document.getElementById('input')
  input.value = input.value === ''  ? 'Olá mundo' : ''

  console.log(input.value)
  console.log(input.getAttribute('value'))   //Para ler o atributo escrito entre aspas. A diferença dele para o input.value é que ele pega o valor pré-inserido no HTML, enquanto o input.value pega o último valor (é mais dinâmico)
})

document.getElementById('type').addEventListener('click', function () {
  input.type = input.type !== 'radio' ? 'radio' : 'text'
})

document.getElementById('disable').addEventListener('click', function(){

document.getElementById('type').classList.remove('typeC')

})

document.getElementById('data').addEventListener('click', function(){

}99236-4053 neylon