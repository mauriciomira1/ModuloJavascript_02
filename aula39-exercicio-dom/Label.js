const Component = require("./Component")

class Label extends Component{
  constructor (textContent, classNameElement) {
    super('label', classNameElement)
    this.textContent = textContent
  }
  textAdd(textContent, classNameElement) {
    const elem = document.querySelector('class', classNameElement)
    elem.innerText = textContent
  }
}

module.exports = Label