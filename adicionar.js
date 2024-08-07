let contatos = require("./contatos");

function adicionarContato(contato) {
    contato.id = contatos.length + 1;
    contatos.push(contato);
}

module.exports = adicionarContato;