const {authSchema} = require('../helpers/validateSchema');
const {signAsccessToken,signRefreshToken, verifyRefreshToken} =require('../helpers/jwtHelpers');
const sendEmail = require('..helpers/email');
const crypto = require('crypto');
const bcrypto = require('bcryptjs');
// const argon2 =require ('argon2') 

const {cerror} = require('console');

let User = db.Users

module.exports={

    registerUser:async(req, res, next)=>{
        try{
            const {email, password} =await authSchema.validateAsync(req.body)
            const exists =await User.findOne({where:{email}})
            if(exists) throw createHttpError.conflict(' ${email} is aready been registered')
            const newUser = new User({email, password})
        const savedUser = await newUser.save()

        }
    }
}