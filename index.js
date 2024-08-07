const prompt = require('prompt-sync')();

const listarUsuarios = require('./listar');
const adicionarUsuario = require('./adicionar');
const atualizarUsuario = require('./atualizar');
const removerUsuario = require('./remover');

mainMenu();

function mainMenu(){
    console.log(`
        "Menu de Jogadores"
        1 - Listar Usuário
        2 - Adicionar Usuário
        3 - Atualizar Usuário
        4 - Remover Usuário
        5 - Sair
    `);

    const opcao = prompt('Digite o numero da opcao que deseja: ');

    let index

    switch(opcao){
        case '1':
            listarUsuarios();
            mainMenu();
            break;
        case '2':
            const nome = prompt('Digite o nome do usuário: ');
            const email = prompt('Digite o email do usuário: ');
            let telefones = [];
            let adicionarMais = true;

            while (adicionarMais) {
                const telefone = prompt('Digite o número de telefone: ');
                telefones.push(telefone);
                adicionarMais = prompt('Deseja adicionar telefone? (s/n): ').toLowerCase() === 's';
            };

            adicionarUsuario({ nome, email, telefones});
            console.log('Usuário adicionado com sucesso!');
            mainMenu();
            break;
        case '3':
            listarUsuarios();
            index = parseInt(prompt('Número do ID do usuário a atualizar: '));
            const novoNome = prompt('Digite o novo nome do usuário: ');  
            const novoEmail = prompt('Digite o novo email: ');
            let novosTelefones = [];
            let adicionarMaisNovos = true;

            while (adicionarMaisNovos) {
                const novoTelefone = prompt('Digite o número do novo telefone: ');
                novosTelefones.push(novoTelefone);
                adicionarMaisNovos = prompt('Deseja adicionar outro telefone? (s/n): ').toLowerCase() === 's';
            }

            atualizarUsuario(index, { nome: novoNome, email: novoEmail, telefones: novosTelefones });
            console.log('Usuário atualizado com sucesso');
            mainMenu();
            break;
        case '4':
            index = parseInt(prompt('Número do usuario a remover: ')) -1;
            removerUsuario(index);
            console.log('Usuário removido com sucesso!');
            mainMenu();
            break;
        case '5':
            console.log('Saindo do programa...');
            break;
        default:
            console.log('Opção inválida!');
            mainMenu();         
    };
};

