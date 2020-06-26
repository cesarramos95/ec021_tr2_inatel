const Meme = require('./database/models/Memes');

// Criar um meme
async function inserir(meme) {
    meme = await Meme.create(meme);
    return meme;
}
// Atualizar um meme
async function atualizar(id, meme) {
    meme = await Meme.findByIdAndUpdate(id, meme); // Buscando meme por id e atualizando seus dados

    if (meme != null) { // Caso o resultado não seja nulo, quer dizer que encontramos um registro para atulizar e ele foi atualizado
        let memeAtualizado = await Meme.findById(id); // Buscamos o registro atualizado
        return memeAtualizado;
    } else {
        return {};
    }
}

async function buscar(query) {
    let memes = [];
    let { id }  = query;
    
    if (id) {
        //Busca por id
        memes = await Meme.findById(id);
    } 
    else {
        //Buscar todos
        memes = await Meme.find();
    }

    return memes;
}
// Excluir um meme
async function excluir(id) {
    let excluido = await Meme.findByIdAndDelete(id);

    return excluido;
}

module.exports = {
    inserir,
    atualizar,
    buscar,
    excluir
}