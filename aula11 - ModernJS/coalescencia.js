// Operador de Coalescência Nula
// Retorna o valor da direita quando o da esqurda é 'null' ou 'undefined', se não, volta o da esquerda mesmo
// É bom para validar se o usuário não digitou nada e retornar algum erro, mas não considerar o ZERO como erro
let a = 0   // false
let b = a || 42  // 42 é true


console.log({a, b})

b = a ?? 42

console.log({a, b})
