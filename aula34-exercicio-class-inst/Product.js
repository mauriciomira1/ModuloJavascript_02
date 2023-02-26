class Product {
  constructor (name, description, price) {
    this.name = name
    this.description = description
    this.price = price
    this.inStock = 0
  }
  addToStock(quantity) {
    this.inStock += quantity
  }
  calculateDiscount(discount) {
    return this.price - this.price * (discount * 0.01)
  }
}

const lavadora = new Product('Lava Louças', 'É isso aí', 2400.00)
const stock = lavadora.addToStock(50)
const finalPrice = lavadora.calculateDiscount(10)
console.log(lavadora, `\nO valor com desconto é ${finalPrice}\n`, `A quantidade em estoque é ${lavadora.inStock}\n`)