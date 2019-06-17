'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var helper = require("./helper");

var contact = exports.contact = async function contact(req, res) {
    console.log('====================================');
    console.log(req.query);
    console.log('=================controller===================');
    var _req$query = req.query,
        name = _req$query.name,
        email = _req$query.email,
        message = _req$query.message;

    try {
        helper.contactAdmin(name, email, message).then(function (result) {
            return res.status(200).json({
                success: true,
                result: result
            });
        });
    } catch (e) {
        return res.status(200).json({ success: false, mensagem: e.message });
    }
};