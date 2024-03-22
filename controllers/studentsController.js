const { vendorvalide } = require('../helpers/validateschema')
const db = require('./models/indexstart') 
const createError = require('http-errors')
// use the model 
const student = db.students
const Course = db.Courses

module.exports = {

    // add a student 

    addStudent : async(req , res, next)=>{

        try{
            let info = {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                gender: req.body.gender
            }

            const addStudent =await student.create(info)
            res.status(200).send(addStudent)
        } catch(error) {
            next(error)
        }
      
        }, 

        // get all students with Course

        getStudents :async(req, res, next)=>{
          try  {
            let allstudents = await student.findAll({
                include:[{model: Course, attributes:['coursename']}]
            })
            res.status(200).send(allstudents)

            } catch (error) {
                next(error)
            }
        },

        // get student by id

        getStudent : async(req, res, next)=>{
            try{
                let id = req.params.id 
                let student =await student.findOne({where:{student_id: id}})

                if(!student){
                    throw (createError(404, "Student does not exist"))

                }
                res.status(200).send(student)
            } catch (error) {
                next(error)
            }
        },

        // update student
        updateStudent : async(req, res, next)=>{
            try{
                let id = req.params.id 
                let student =await student.findOne({where:{student_id: id}})

                if(!student){
                    throw (createError(404, "Student does not exist"))

                }
                res.status(200).send(student)
            } catch (error) {
                next(error)
            }
        },

       // deletestudent

       deleteStudent : async(req, res, next)=>{
        try{
            let id = req.params.id 
            let student =await student.destroy({where:{student_id: id}})
            res.status(200).send("student Deleted Succesfully")
        } catch (error) {
            next(error)
        }
    },

}  


