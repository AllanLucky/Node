const Joi = require('joi');
const authSchema = Joi.object({
    email:Joi.string().email().lowercase().required(),
    passworld: Joi.string().min(6).required(),
  
})

const vendorvalidate =  Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    phonenumber: Joi.string().required(),
    email: Joi.string().required(),
    adress: Joi.string().required(),
})

module.exports ={

    authSchema,
    ve
}