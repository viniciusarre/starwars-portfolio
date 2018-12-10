import * as helper from './helper.js';


export const getSobre = async  (req, res) =>{
    console.log('====================================');
    console.log(req.query);
    console.log('=================controller===================')

    try{
        helper.getSobre().then(sobre=>{
            return res.status(200).json({
                success: true,
                sobre: sobre
            })
        });
    }catch(e){
        return res.status(200).json({ success: false, mensagem: e.message });
    }

};
