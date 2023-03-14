export class Component {
  #element = null
  
  constructor(tag, parent, options) {
    this.tag = tag
    this.parent = parent
    this.options = options
    this.build()
  }
  
  #getParent () {
    document.querySelector(this.parent)
  }

  build () {
    this.#element = document.createElement(this.tag)
  }

  render () {

  }
}