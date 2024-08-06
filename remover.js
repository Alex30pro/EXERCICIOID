let contatos = require('./contatos');

function removerUsuario(index, id) {
    if (index !== -1) {
        contatos[index] = {id, ...contatos};
        contatos.splice(index, 1);
    } else {
        console.log('Usuário não encontrado')
    }
    }

module.exports = removerUsuario;    