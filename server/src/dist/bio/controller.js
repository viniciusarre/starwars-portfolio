'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSobre = undefined;

var _helper = require('./helper.js');

var helper = _interopRequireWildcard(_helper);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getSobre = exports.getSobre = async function getSobre(req, res) {
    console.log('====================================');
    console.log(req.query);
    console.log('=================controller===================');

    try {
        helper.getSobre().then(function (sobre) {
            return res.status(200).json({
                success: true,
                sobre: sobre
            });
        });
    } catch (e) {
        return res.status(500).json({ success: false, mensagem: e.message });
    }
};