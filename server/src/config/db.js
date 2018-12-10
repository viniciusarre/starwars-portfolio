var mongoose = require('mongoose');
module.exports = ()=>{
    global.db = mongoose.connect('[Connection_URL]/portfolio',  { useNewUrlParser: true });
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
