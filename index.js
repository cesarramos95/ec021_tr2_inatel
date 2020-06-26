const restify = require("restify");
const mongoose = require("mongoose");
const server = restify.createServer();
const axios = require("axios").default;

const database = require("./database");
const dao = require("./dao");

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

const MEME = '/meme';

function logRequest(req, res, next) {
    let msg = `[${req.getRoute().method}] ${req.href()}`

    if (req.body) {
        msg += ` => ${JSON.stringify(req.body)}`;
    }

    console.log(msg);
    next();
}


// Rota de criação de meme
server.post(`${MEME}`, logRequest, validateToken, async (req, res) => {
    let meme = {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        ano: req.body.ano

    };

    let memeCriado = await dao.inserir(meme);
    res.json(201, memeCriado);
});
// Rota de atualização de meme
server.patch(`${MEME}/:id`, logRequest, validateToken, async (req, res) => {
    let meme = {
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        ano: req.body.ano
    };

    let memeAtualizado = await dao.atualizar(req.params.id, meme);

    res.json(200, memeAtualizado);
});

// Busca por todos os memes
server.get(`${MEME}`, logRequest, validateToken, async (req, res) => {
    let meme = await dao.buscar(req.query);
    res.json(200, meme);
});

// Busca um meme pelo ID
server.get(`${MEME}/:id`, logRequest, validateToken, async (req, res) => {
    let meme = await dao.buscar(req.params.id);
    res.json(200, meme);
});

// Rota para excluir um meme
// O id do objeto a ser excluído, nesse caso específico, é passado como body da requisição
server.del(`${MEME}`, logRequest, async (req, res) => {
    let excluido = await dao.excluir(req.body.id);

    res.send(204)
});

server.listen(3000, () => {
    console.log(`O servidor está rodando!`);

    mongoose.connect(database.DB_URL, database.DB_SETTINGS, (err) => {
        if (!err) {
            //Conectou com o MongoDB
            console.log(`Aplicação conectada com o MongoDB: ${database.DB_SETTINGS.dbName}`);
        } else {
            //Deu ruim a conexão
            console.log(`Erro ao conectar com o MongoDB: ${database.DB_URL}`);
            console.log(`Erro: ${err}`);
        }
    })
});