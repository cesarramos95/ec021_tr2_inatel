const DB_URL = 'mongodb+srv://adauto:adauto@cluster0-rven8.mongodb.net/test?retryWrites=true&w=majority'

//'mongodb://127.0.0.1:27017/'


const DB_SETTINGS = {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    dbName: 'ec021-av2-core',
};

module.exports = {
    DB_URL,
    DB_SETTINGS
}