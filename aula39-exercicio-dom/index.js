const Component = require("./Component");
const Input = require("./Input");

const element1 = new Component('div', 'div1')
const element2 = new Input('enter1')

const insert = element1.build(this)