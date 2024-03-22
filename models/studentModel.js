const { DataTypes } = require("sequelize");
const { sequelize } = require("./indexStart");

module.exports =(sequelize, DataTypes) =>{

    const student = sequelize.define('student',{
        student_id: {
            type: DataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true,
        },

        firstname:{

            type: DataTypes.STRING,
           allowNull: false,
        },

        lastname:{

            type: DataTypes.STRING,
           allowNull: false,
        },

        gender:{

            type: DataTypes.STRING,
           allowNull: true,
        },

    })


    return student


    }
