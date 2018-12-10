"use strict";

var _controller = require("./src/modules/semestre/controller");

var Controller = _interopRequireWildcard(_controller);

var _controller2 = require("./src/modules/bio/controller");

var BioController = _interopRequireWildcard(_controller2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// content of index.js
var express = require('express');
var port = 5000;
var app = express();
// const controller = require("./src/modules/semestre/controller");
var db = require("./src/config/db");

app.use(function (req, res, next) {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

require('babel-register')({
    presets: ['env']
});

app.get('/semestre/', Controller.getSemestre);
app.get('/episodios/', Controller.getEpisodios);
app.get('/sobre/', BioController.getSobre);

app.listen(port, function (err) {
    if (err) {
        return console.log('something bad happened', err);
    }
    db();
    console.log("server is listening on " + port);
});