const nomes = ['Álvaro', 'Thais', 'Aerica'];

const setores = ['Suporte', 'Vendas', 'Financeiro'];

let nomesSetores = [nomes, setores];

const qualSetor = (nome) => {

    if(nomesSetores[0].includes(nome)){   
        indice = nomesSetores[0].indexOf(nome)
        return nomesSetores[0][indice] + ', seu setor é ' + nomesSetores[1][indice]
    }else{
        return 'Colaborador não encontrado' ;
    }
}

console.log(qualSetor('Lucas'));