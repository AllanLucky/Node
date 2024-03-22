const express = require('express')

const courseController = require('../courseController')
const routes = require.Router();

routes.post('/addCourse', courseController.addCourse)
routes.get('/getAllCourses',courseController.getCourse )

module.exports = routes