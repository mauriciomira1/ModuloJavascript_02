export class Component {
  #element = null
  
  constructor (elementType, parent, options) {
    this.elementType = elementType
    this.parent = parent
    this.options = options
    this.build()
  }

  #getParent() {
    document.getElementById('main')
  }

  build() {
    this.#element = document.createElement(this.elementType)
    Object.assign(this.#element, this.options)
    return this
  }

  render() {
    this.#getParent().appendChild(this.options)
  }
}

module.exports = Component