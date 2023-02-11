function sum (...numbers) {
  return numbers.reduce((accum, num) => accum + num, 0)
}

console.log (sum(4,5,8,5,1,6,3))