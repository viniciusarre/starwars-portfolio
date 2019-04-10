var mongoose = require('mongoose');
module.exports = ()=>{
    mongoose.connection.on('connected', function () {
        console.log('=====Conexão estabelecida com sucesso=====');
        global.db = mongoose.connect('mongodb://dev:d3vpass@ds119304.mlab.com:19304/portfolio');
        // global.db = mongoose.connect('mongodb://localhost:27017/portfolio',  { useNewUrlParser: true });
    });

    mongoose.connection.on('error', function (err) {
        console.log('=====Ocorreu um erro: ' + err);
    });
    mongoose.connection.on('disconnected', function () {
        console.log('=====Conexão finalizada=====');
    });

};
