const { Error } = require('sequelize')
const db = require('../Models/indexStart')

const createError =require('http-errors')
const { reset } = require('nodemon/lib/rules')

// user model

const user =db.users

module.exports={

    //add User

    addUser : async(req, res, next)=>{
        try{
           const  {email, password} =req.body;
           const exists = await user.findOne({where:{email}})
           if (exists) {
            throw createError.Conflict('${email} has already been registered')
           }

           const newUser = new user({email, password})
           const savedUser = await newUser.save()
           const accessToken = await signAccesssToken(savedUser.user_id)

            res.status(200).send({accessToken})

        }catch(error) {

            next(Error)
        }

    },
    

    // get all users

    getUsers :async (req, res, next)=>{

        try{

            let allUsers =await db.users.findall({})
            res.status(200).send(allusers)

        } catch (error) {
            next(error)
        }
    },

   
}