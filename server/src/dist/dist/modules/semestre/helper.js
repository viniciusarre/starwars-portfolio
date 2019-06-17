"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Semestre = require("./semestreModel");

var getSemestre = exports.getSemestre = function getSemestre(num) {
    return new Promise(function (resolve, reject) {
        Semestre.findOne({ num: num }).then(function (semestre, err) {
            if (!err) {
                console.log(semestre);
                resolve(semestre);
            } else {
                console.log("erro semestre ", err.message);
                console.log(err);
                reject(err);
            }
        });
    });
};

var getEpisodios = exports.getEpisodios = function getEpisodios() {
    return new Promise(function (resolve, reject) {
        Semestre.find().then(function (semestres, err) {
            if (!err) {
                console.log(semestres);
                var sem = [];
                if (semestres.length > 0) sem = semestres.map(function (sem) {
                    return sem !== undefined && { title: sem.crawlTitle, subtitle: sem.crawlSubtitle, materias: sem.materias.map(function (m) {
                            return m.nome_materia;
                        }) };
                });
                // console.log(" >>>> SEM >>> ", sem);
                resolve(sem);
            } else {
                console.log("erro semestre ", err.message);
                console.log(err);
                reject(err);
            }
        });
    });
};