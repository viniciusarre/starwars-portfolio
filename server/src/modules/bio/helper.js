const Sobre = require("./sobreModel");


export const getSobre = () =>{
    return new Promise((resolve, reject) => {
        Sobre.find()
            .then(
                (sobre, err) => {
                    if (!err) {
                        console.log(sobre);
                        resolve(sobre);
                    } else {
                        console.log("erro semestre ", err.message);
                        console.log(err);
                        reject(err);
                    }
                }
            );

    });
};

