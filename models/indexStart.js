
const dbConfig = require('../Config/dbConfig')
const {Sequelize, DataTypes } = require('sequelize')

const sequelize =new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAlliases:false// if errors in your code will overwrite the error using this line
    }
)

sequelize.DBauthenticate()
.then(()=>{
    console.log('database connection Succesful...')
})
.catch (err=>{
    console.log('Error' + err)
})

const db ={}
db.sequelize = sequelize
db.sequelize = sequelize

db.students =require('./studentModel.js')(sequelize, DataTypes)

db.sequelize.sync({force:false})
.then(()=>{
    console.log('re-sync done')
})

db.students = require('./studentModel.js')(sequelize, DataTypes)

module.exports = db