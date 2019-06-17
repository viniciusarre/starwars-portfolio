'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getEpisodios = exports.getSemestre = undefined;

var _helper = require('./helper.js');

var helper = _interopRequireWildcard(_helper);

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

var getSemestre = exports.getSemestre = async function getSemestre(req, res) {
    console.log('====================================');
    console.log(req.query);
    console.log('=================controller===================');
    var num = req.query.num;

    try {
        helper.getSemestre(num).then(function (semestre) {
            return res.status(200).json({
                success: true,
                semestre: semestre
            });
        });
    } catch (e) {
        return res.status(200).json({ success: false, mensagem: e.message });
    }
};
var getEpisodios = exports.getEpisodios = async function getEpisodios(req, res) {
    console.log('====================================');
    console.log(req.query);
    console.log('=================controller===================');
    // const { num } = req.query;

    try {
        helper.getEpisodios().then(function (semestre) {
            return res.status(200).json({
                success: true,
                semestre: semestre
            });
        }).catch(function (e) {
            return res.status(200).json({ success: false, mensagem: e.message });
        });
    } catch (e) {
        return res.status(200).json({ success: false, mensagem: e.message });
    }
};