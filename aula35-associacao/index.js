const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Av. Presidente Vargas", "50A", "Centro", "Ceres","GO")
const mauricio = new Person("Maurício Miranda Gomes", addr)

console.log(mauricio)
console.log(mauricio.address.fullAddress())