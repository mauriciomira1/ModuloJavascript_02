const Author = require("./Author");

const mauricio = new Author("Maurício Miranda Gomes")

const post = mauricio.writePost("Título do post", "Lorem ipsum dolor sic...")

post.addComment("Jovis Miranda", "Muito bom!")
post.addComment("Cissy", "Very bom")

console.log(mauricio)
console.log(post)