function show() {
  const selecao = document.querySelectorAll('.contact-item')
  console.log(selecao)

  const selecao2 = document.getElementsByClassName('contact-item')
  console.log(selecao2)

  const selecaoPorId = document.getElementById('contact1')
  console.log(selecaoPorId)

  const grade = document.getElementById('contact-list')


  const newlabel = document.createElement('label')
  newlabel.setAttribute('for','contact1')
  newlabel.innerHTML = 'Novo contato'

  const newcontact = document.createElement('input')
  newcontact.setAttribute('class', 'contact-item')

  grade.appendChild(newlabel)
}