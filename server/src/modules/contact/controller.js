const helper = require("./helper");


export const contact = async  (req, res) =>{
    console.log('====================================');
    console.log(req.query);
    console.log('=================controller===================');
    const { name, email, message } = req.query;

    try{
        helper.contactAdmin( name, email, message).then(result=>{
            return res.status(200).json({
                success: true,
                result
            })
        });
    }catch(e){
        return res.status(200).json({ success: false, mensagem: e.message });
    }

};