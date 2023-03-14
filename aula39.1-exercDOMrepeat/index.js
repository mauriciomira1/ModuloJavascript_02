import { Component } from "./Component.js";
import { Label } from "./Label.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";

const el = new Component ('h1', 'main', { innerText: 'Olá, mundo!' })
console.log(el)
el.build().render()

const inp = new Input('body', {innerText: 'Clique aqui!'})