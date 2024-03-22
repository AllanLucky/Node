const  express =require('express')

const authController = require('../controllers/auth.controller')

const routes =express.Router();

routes.post('/adduser', authController.addUsers)
routes.get('getAlllUsers', authController.getUsers)


module.exports = routes