const restify = require("restify");
const { axiosValidate } = require("../Middleware/auth");
const axios = require("axios").default;
const server = restify.createServer();

server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

function logRequest(req, res, next) {
    let msg = `[${req.getRoute().method}] ${req.href()}`

    if(req.body) {
        msg += ` => ${JSON.stringify(req.body)}`;
    }

    console.log(msg);
    next();
}

// Bloco de código responsáve por fazer o login 

const axiosInstance = axios.create(
    {
        baseURL: 'http://localhost:3000/api'
    }
);

server.post('/auth/login', logRequest, async (req, res) => {
    let auth = {
        username: req.body.username,
        password: req.body.password
    };
    axiosInstance.post(auth, body, {})
    .then((response) => {
        res.json(response.status, response.data);
        
    })
    .catch((err) => {
        res.json(err.response.data);
    })

});

