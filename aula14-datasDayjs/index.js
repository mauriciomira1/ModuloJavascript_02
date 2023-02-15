const dayjs = require('dayjs')


/* const dn = dayjs('06/10/1990')
const dAtual = dayjs(Date())

const diff = dAtual.diff(dn)
const day = dayjs().add(diff, 'ms')
const day = d.add(diff, 'day') 
const result = day

console.log(day)
const idadeAtual = ''
const proxDataAniv = ''
const diasQFaltam = '' */


function birthday (date) {
  const birthday = dayjs(date)
  const today = dayjs()
  const age = today.diff(birthday, 'year')
  const nextBday = birthday.add(age + 1, 'year')
  const showNextBday = nextBday.format('DD/MM/YYYY')
  const bdayDay = nextBday.diff(today, 'day') + 1

  console.log(`
  Idade: ${age}
  Próximo aniversário: ${showNextBday}
  Quantos dias para o aniversário: ${bdayDay}
  `)
}

birthday('1990-10-06')