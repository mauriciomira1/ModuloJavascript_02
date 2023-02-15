const dayjs = require('dayjs')
dayjs().format('DD/MM/YYYY')

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
  const birth = today.diff(birthday, 'year')
  return birth
}

console.log(birthday(06/10/1990))