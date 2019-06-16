var mongoose = require('mongoose');
module.exports = ()=>{
// mongodb://dev:d3vpass@ds119304.mlab.com:19304/portfolio
// d3vpass
    global.db = mongoose.connect('mongodb://dev:d3vpass@ds119304.mlab.com:19304/portfolio',  { useNewUrlParser: true });
    mongoose.connection.on('connected', function () {
        console.log('=====Conexão estabelecida com sucesso=====');
    });
    mongoose.connection.on('error', function (err) {
        console.log('=====Ocorreu um erro: ' + err);
    });
    mongoose.connection.on('disconnected', function () {
        console.log('=====Conexão finalizada=====');
    });

};
