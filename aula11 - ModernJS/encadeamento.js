const user = {
  name: 'Maurício Miranda',
  email: 'mauriciomiranda@email.com',
  friends: [{
    name: 'Maria',
    address: {
      street: 'Alguma rua',
      number: 89
    }
  }],
  age: 42,
  phone: {
    countryCode: '+55',
    ddd: '61',
    number: '991234567'
  }
}

// console.log(user.friends[0].phone.ddd)
console.log(user.friends[0].phone?.ddd)
console.log(user.brothers?.[5].name)