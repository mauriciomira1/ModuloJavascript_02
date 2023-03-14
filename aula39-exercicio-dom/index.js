import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Label } from "./Label.js";
import { Input } from "./Input.js";

const title = new Component ('h1', 'body', { textContent: 'Olá mundo'})
console.log(title)
/* title.render() */

/* title.tag = 'h3' */
title.render()

/* const Component = require("./Component");
const Input = require("./Input");

const element1 = new Component('div', 'div1')
const element2 = new Input('enter1')

const insert = element1.build(this) */