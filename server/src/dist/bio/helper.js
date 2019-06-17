"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Sobre = require("./sobreModel");

var getSobre = exports.getSobre = function getSobre() {
    return new Promise(function (resolve, reject) {
        Sobre.find().then(function (sobre, err) {
            if (!err) {
                console.log(sobre);
                resolve(sobre);
            } else {
                console.log("erro semestre ", err.message);
                console.log(err);
                reject(err);
            }
        });
    });
};