const JWT = require('jsonwebtoken');
const createError = require('http-errors');
// const User = require('../models/userModel');


module.exports ={


    signAccessToken:(UserId, userRole)=>{

        return new Promise((resolve, reject)=>{

            const payload = {UserId, role:userRole}
            const secret = process.env.ACCESS_TOKEN_SECRET;
            const options ={
                expiresIn: '10m',
                issuer: 'EddTechnologies.com',
                audence: UserId.tostring(),
            
            }

            JWT.sign(payload, secret, options, (error, token)=>{

                if(error) {

                    console.log(error.message)
                    reject(createError.InternalServerError());
                
                }

                resolve(token);
            })
        })
    },
    verifyAccessToken:(req, res, next)=>{

        if(!req.headers['authorization']) return next(createError.Unauthorized())
        const authHeader = req.authHeader.split('')
        const token =bearerToken[1]
        JWT.verify(token, process.env.ACCESS_TOKEN_SECRET,(err, payload)=>{
            if(err){
                if(err.name ==='JsonWebTokenError'){
                    return next(createError.Unauthorized())
                }else{
                    return next(createError.Unauthorized(err.message))
                }
            }

            req.payload = payload
            next()
        })

    },

    signRefreshToken:(UserId)=>{

        return new Promise((resolve, reject)=>{

            const payload ={}
            const secret = process.env.REFRESH_TOKEN_SECRET;
            const options ={

                expiresIn: '1y',
                issuer: 'EddTechnologies.com',
                audence: UserId.tostring(),
            }

            TWT.sign(payload, secret, options,(error, token)=>{
                if(error) {
                    console.log(error.message)
                    reject(createError.InternalServerError());
                }
                resolve(token);
            })


        })

        },

        verifyRefreshToken: (refreshToken)=>{
            return new promise ((resolve, reject)=>{
                TWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,(err, payload)=>{
                    if(err) return reject(createError.Unauthorized())
                    const useid =payload .aud

                    resolve(useid.tostring);

                })
            
            })
        },

        restrict: (...allowedRoles) =>{

            return (req, res, next) =>{
                const userRole = res.payload.role;
                if(!userRole || !allowedRoles.includes(userRole) ) {
                    return next(createError.Forbidden('Sorry! yuo do not have permission to perform this action'));
                }
                next();
            };
        }
    

    }


