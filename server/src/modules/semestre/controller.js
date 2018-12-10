import * as helper from './helper.js';


export const getSemestre = async  (req, res) =>{
    console.log('====================================');
    console.log(req.query);
    console.log('=================controller===================');
    const { num } = req.query;

    try{
        helper.getSemestre(num).then(semestre=>{
            return res.status(200).json({
                success: true,
                semestre: semestre
            })
        });
    }catch(e){
        return res.status(200).json({ success: false, mensagem: e.message });
    }

};
export const getEpisodios = async  (req, res) =>{
    console.log('====================================');
    console.log(req.query);
    console.log('=================controller===================');
    // const { num } = req.query;

    try{
        helper.getEpisodios()
            .then(semestre=>{
                return res.status(200).json({
                    success: true,
                    semestre: semestre
                })
            }).catch(e=>{
                return res.status(200).json({ success: false, mensagem: e.message });
            });
    }catch(e){
        return res.status(200).json({ success: false, mensagem: e.message });
    }

};