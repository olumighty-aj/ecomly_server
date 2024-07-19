const { validationResult } = require('express-validator');


exports.register = async function (req, res){
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const errorMessages = errors.array().map((error)=> ({
            field:error.path,
            message: error.msg,
        }));
        return res.status(400).json({errors:errorMessages});
    }
    try{

    }catch(error){
        return res.status(500).json({type: error.name, message: error.message})
    }
    
}

exports.login = async function (req, res) {
    return res.status(201).json({'name': 'Paul', 'age': 26,});
}

exports.forgotPassword = async function (req, res){

}

exports.verifyOtp = async function(req, res){

}

exports.resetPassword = async function(req, res){

}