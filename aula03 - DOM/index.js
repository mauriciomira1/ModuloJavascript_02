function register (element) {
  const username = element.children.username.value
  const password = element.children.password.value
  const passwordConfirmation = element.children.passwordConfirmation.value

  if (password === passwordConfirmation) {
    alert('Cadastro concluído')
    
  } else alert('As senhas não coincidem.')
  console.log(username, password, passwordConfirmation)
}