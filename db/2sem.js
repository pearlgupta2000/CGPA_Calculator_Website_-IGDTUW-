const {db,Sequelize}=require('./connect')

const cse_2 = db.define('cse_2',{
    name:{
        type:Sequelize.STRING,
        allowNull:false,
        primaryKey:true
    },
    credit:{
        type:Sequelize.INTEGER,
        allowNull:false,
    }
})

const seed=async()=>{
    try{

        await db.sync()
        await cse_2.bulkCreate([
            {name:'Applied_Mathematics-II',credit:3},
            {name:'Applied_Physics-II',credit:3},
            {name:'Environmanetal_Science',credit:4},
            {name:'Engineering_Mechanics_OR_Basic_Electrical_Engineering',credit:5},
            {name:'Workshop_Practice_OR_Engineering_Graphics_Lab',credit:1},
            {name:'Humanities_and_Social_Science_OR_Programming_in_C_Language',credit:1}
            
        ],{
            ignoreDuplicates:true
        })

    }
    catch(er){
        console.log(er)
    }
}

seed()


db.sync()
.then(()=>{
    console.log("db synced")
})
.catch((er)=>{
    console.log("error in syncing")
})

module.exports={
    cse_2
}