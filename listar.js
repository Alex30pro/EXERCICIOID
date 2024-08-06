let contatos = require('./contatos');

function listarUsuarios() {
    contatos.forEach((contato) => {
    console.log(`ID: ${contato.id} , Nome: ${contato.nome}, Email:${contato.email}, Telefone: ${contato.telefones}`);
    });

    }

    module.exports = listarUsuarios;

