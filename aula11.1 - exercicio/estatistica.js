const media = (...numbers) => {
  let sum = numbers.reduce((accum, num) => accum += num, 0)
  return sum / numbers.length
}

console.log(`A média aritmética é: ${media(10,20,30,5)}`)

const mediaPonderada = (...entries) => {
  let sum = entries.reduce((accum, { num, peso }) => accum + (num * (peso ?? 1)), 0)
  let sumPeso = entries.reduce((accum, {peso}) => accum + (peso ?? 1), 0)
  return sum/sumPeso
}

console.log(`A média ponderada é: ${mediaPonderada( {num:9, peso:3} , {num:7} , {num:10, peso:1} )}`)

const mediana = (...numMediana) => {
  const numMedianaOrdened = [...numMediana].sort( (a, b) => a - b)
  const itemCentral = Math.floor(numMedianaOrdened.length / 2)
  if (numMedianaOrdened.length % 2 == 0) {
    const middle1 = numMedianaOrdened[itemCentral - 1]
    const middle2 = numMedianaOrdened[itemCentral]
    return (middle1 + middle2)/2
  } else {
    return numMedianaOrdened[itemCentral]
  }
}

console.log(`A mediana é: ${mediana(1,3,3,4)}`)