import { Component } from "./Component.js";
import { Label } from "./Label.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";

const el = new Component ('h1', 'main', { innerText: 'Olá, mundo!' })
console.log(el)
el.build().render()

const form = new Form('body')
const label = new Label('Nome:', form, { htmlFor: 'inputName'})


const input = new Input(form, { placeholder: 'Your name', id: 'inputName' })

form.render()


form.addChildren(label, input)
form.addChildren(
  new Component ('br'),
  new Label('Phone:', form, { htmlFor: 'inputNumber'}),
  new Input(form, {id: 'inputNumber', placeholder: 'Your phone number', type: 'tel'}),
  new Component ('br'),
  new Label('Birth:', form, { htmlFor: 'inputBirth'}),
  new Input(form, {id: 'inputBirth', placeholder: 'Your birth', type: 'date'})
)



