# inatel-ec021-tr2

Um backend feito em node JS que utiliza:
[Restify](http://restify.com/): framework para desenvolvimento de aplicações web, auxialiando no tratamento de rotas.  
[Mongoose](https://mongoosejs.com/): utilizado para fazer a modelagem de objetos para o banco de dados não-relacional MongoDB.     
[MongoDB](https://www.mongodb.com/): banco de dados de alto desempenho não-relacional orientado à docuemntos.    
[JWT](https://jwt.io/): sistema de autenticação baseado em token.    
[Axios](https://github.com/axios/axios): Cliente HTTP baseado em promisse que funciona tanto no browser quando no node JS.  

## Pré requisitos


## Instalação e configuração
Após clonar o repositório, execute o comando abaixo para instalar as dependências necessárias:

```sh
npm install
```

## Como executar
Execute o comando abaixo par iniciar o servidor:

```sh
npm start
```

## Como testar os endpoints
Importe o arquivo `TR2_EC021.postman_collection.json` no `Postman` (ou `Insomnia`) e execute o teste das rotas. São 7 requests ao todo.
