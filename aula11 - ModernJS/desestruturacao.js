const person = {
  name: 'Maurício',
  age: '32',
  job: 'Developer',
  parents: ['Marli', 'Juvanil']
}

const {job, parents, name} = person

const [pai, mãe] = parents

console.log(`Sua profissão é ${job} e seus pais são ${pai} e ${mãe}`) //poderia ter usado o parents[0] e parents[1] dentro do ${}

 function createUser ({name, job, parents}) { //aqui foi usado a desestruturação dentro do próprio argumento
  const id = Math.floor(Math.random() * 9999)
  return {
    name,
    job,
    parents,
    id
  }
 }

 const mau = createUser(person)
 console.log(mau)