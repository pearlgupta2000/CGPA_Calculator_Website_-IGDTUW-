const {db,Sequelize}=require('./connect')

const cse_1 = db.define('cse_1',{
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
        await cse_1.bulkCreate([
            {name:'Applied_Mathematics-I(BAS-101)',credit:3},
            {name:'Applied_Physics-I(BAS-103)',credit:3},
            {name:'Applied_Chemistry(BAS-105)',credit:4},
            {name:'Engineering_Mechanics(BMA-110)_OR_Basic_Electrical_Engineering(BEC-110)',credit:5},
            {name:'Workshop_Practice(BMA-120)_OR_Engineering_Graphics_Lab(BMA-130)',credit:1},
            {name:'Humanities_and_Social_Science(HMC-110)_OR_Programming_in_C_Language(BCS-110)',credit:1}
            
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
    cse_1
}