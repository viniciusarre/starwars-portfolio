var mongoose = require("mongoose");
module.exports = () => {
  // mongodb://dev:d3vpass@ds119304.mlab.com:19304/portfolio
  // d3vpass
  // process.env.DB_URI ||
  global.db = mongoose.connect("localhost:27017/portfolio", {
    useNewUrlParser: true
  });
  mongoose.connection.on("connected", function() {
    console.log("=====Conexão estabelecida com sucesso=====");
  });
  mongoose.connection.on("error", function(err) {
    console.log("=====Ocorreu um erro: " + err);
  });
  mongoose.connection.on("disconnected", function() {
    console.log("=====Conexão finalizada=====");
  });
};
