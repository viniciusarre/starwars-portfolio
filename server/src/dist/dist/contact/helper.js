"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var Contact = require("./model");
var mailer = require("nodemailer");
var config = require("./emailConfig");

var contactAdmin = exports.contactAdmin = function contactAdmin(name, email, message) {
    return new Promise(function (resolve, reject) {
        console.log("PROCESS ENV >> ", process.env);

        var contact = new Contact({
            name: name,
            email: email,
            message: message
        });
        contact.save().then(function (result) {
            console.log("RESULT >> ", result);

            var transporter = mailer.createTransport({
                service: 'outlook',
                auth: {
                    user: config.email,
                    pass: config.password
                }
            });

            var mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: 'Obrigado pela mensagem',
                html: '<div style="text-align: center">Obrigado por ter entrado em contato!' + ' <br/>Retornaremos seu contato em breve!</div>'
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);

                    //     const mailOptions = {
                    //         from: process.env.EMAIL,
                    //         to: process.env.EMAIL,
                    //         subject: 'Nova mensagem',
                    //         html: 
                    //         '<div style="text-align: center">Você recebeu uma nova mensagem de '+ name + 
                    //         '! <br/>Corpo da mensagem : '+ mensagem +
                    //         '</div>'
                    //     };

                    //     transporter.sendMail(mailOptions, function(error, info){
                    //     if (error) {
                    //         console.log(error);
                    //     } else {
                    //         console.log('Email sent: ' + info.response);

                    //     }        

                    resolve(true);

                    //     });
                }
            });
        });
    });
};