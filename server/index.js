// content of index.js
const express = require('express');
const port = 5000;
const app = express();
// const controller = require("./src/modules/semestre/controller");
const db = require("./src/config/db");
import * as Controller from "./src/modules/semestre/controller";
import * as BioController from './src/modules/bio/controller';
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

require('babel-register')({
    presets: [ 'env' ]
});

app.get('/semestre/', Controller.getSemestre);
app.get('/episodios/', Controller.getEpisodios);
app.get('/sobre/', BioController.getSobre);

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    db();
    console.log(`server is listening on ${port}`)
});