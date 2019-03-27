const Semestre = require("./semestreModel");


export const getSemestre = (num) =>{
    return new Promise((resolve, reject) => {
        Semestre.findOne({num: num})
            .then(
                (semestre, err) => {
                    if (!err) {
                        console.log(semestre);
                        resolve(semestre);
                    } else {
                        console.log("erro semestre ", err.message);
                        console.log(err);
                        reject(err);
                    }
                }
            );

    });
};

export const getEpisodios = () =>{
    return new Promise((resolve, reject) => {
        Semestre.find()
            .then(
                (semestres, err) => {
                    if (!err) {
                        console.log(semestres);
                        let sem = [];
                        if(semestres.length > 0)
                        sem = semestres.map(sem=>sem!==undefined && {title: sem.crawlTitle, subtitle: sem.crawlSubtitle, materias: sem.materias.map(m=>m.nome_materia)});
                        // console.log(" >>>> SEM >>> ", sem);
                        resolve(sem);
                    } else {
                        console.log("erro semestre ", err.message);
                        console.log(err);
                        reject(err);
                    }
                }
            );

    });
};
