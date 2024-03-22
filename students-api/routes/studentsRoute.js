const express = require('express');

const studentController = require('../controller/studentController');

const routes = require('./courseRoute');

const router = express.Router()

router.post ('/addstudent',studentController.addStudent)
routes.get('/getAllstudents', studentController.getstudent)
router.get('/getstudent', studentController.getstudent)


module.exports =routes