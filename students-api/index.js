const express = require("express");
const cors =require("cors")
require("dotenv").config();
require("./models/indexStart.js")

const app = express();

const studentRoute = require('./Routes/StudentsRoute')

app.use('/api/Students', studentRoute);

app.listen(process.env.port || 4001, function name(){

    console.log('listening on: http://localhost:4000')
    
})






