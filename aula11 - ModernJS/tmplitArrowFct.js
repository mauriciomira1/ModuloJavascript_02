const userName = 'Maurício'
console.log(`Olá ${userName}!
Estamos em ${Date()}`)

const calc = (x, y) => x * y
console.log( `Soma: ${calc(2,5)}`  )

const double = d => `O dobro de ${d} é ${d*2}`

console.log(double(7))

towns = ['Ceres', 'Gama', 'Morro Agudo', 'Nova Glória', 'Itapaci', 'Ceresópolis', 'Cocalzinho', 'Samambaia', 'Ceilondres']

const startP = towns.filter( town => town[0] === 'C' )
console.log(startP)