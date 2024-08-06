let contatos = require("./contatos");

function atualizarContato(id, novoContato){
    const index = contatos.findIndex(contato => contato.id === id);
    if (index !== -1) {
        contatos[index] = {id, ...novoContato};
    } else {
        console.log('Usuário não encontrado')
    }

}

module.exports = atualizarContato;

