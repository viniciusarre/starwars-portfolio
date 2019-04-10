const Contact = require("./model");
const mailer = require("nodemailer");
const config = require("./emailConfig");


export const contactAdmin = (name, email, message) =>{
    return new Promise((resolve, reject) => {
        console.log("PROCESS ENV >> ", process.env);

        const contact = new Contact({
            name: name,
            email: email,
            message: message
        });
        contact.save()
        .then(result=>{
            console.log("RESULT >> ", result);

            const transporter = mailer.createTransport({
            service: 'outlook',
            auth: {
                user: config.email,
                pass: config.password,
            }
            });

            const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: 'Obrigado pela mensagem',
            html: 
            '<div style="text-align: center">Obrigado por ter entrado em contato!'+
            ' <br/>Retornaremos seu contato em breve!</div>'
            };

            transporter.sendMail(mailOptions, function(error, info){
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

    })

};
