Module.exports=(sequelize, DataTypes)=>{

    const user =sequelize.define('user',{
        user_id:{
            type:  DataTypes.INTEGER,
            primarykey:true,
            autoIncrement: true,
        },

        email:{

            type: DataTypes.STRING,
            allowNull :false
        },

        password:{

            type:DataTypes.STRING,
            allowNull:false
        }

    });

    return user

}