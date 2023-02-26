class User {
  constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }
  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log('Login bem sucedido')
    } else {
      console.log('Falha! Email ou senha incorretos.')
    }
  }
}

const user = new User('Maurício Miranda', 'mau@gmail.com', '123456')
console.log(user)
user.login('mau@gmail.com', '123456')
