const {db,Sequelize}=require('./connect')

const cse_3 = db.define('cse_3',{
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

const seed1=async()=>{
    try{

        await db.sync()
        await cse_3.bulkCreate([
            {name:'Data_Structures(BCS-201)',credit:4},
            {name:'Discrete_Strcutures(BCS-203)',credit:4},
            {name:'DBMS(BIT-201)',credit:4},
            {name:'Software_Eng.(BIT-203)',credit:4},
            {name:'Generic_Open_Elective(GEC-201)',credit:2},
            {name:'Industrial_Training_and_Internships(BCS-253)',credit:1},
            {name:'Material_Sc._and_Eng.(BAS-201)_OR_Numerical_Methods(BAS-203)_OR_Analog_and_Digital_Elec.(BEC-209)_OR_Eng._Measurement_and_Meterology.(BMA-211)',credit:4}
        ],{
            ignoreDuplicates:true
        })

    }
    catch(er){
        console.log(er)
    }
}

seed1()


const mech_3 = db.define('mech_3',{
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

const seed2=async()=>{
    try{

        await db.sync()
        await mech_3.bulkCreate([
            {name:'Production_Technology-I(BMA-201)',credit:4},
            {name:'Strength_of_Materials(BMA-203)',credit:4},
            {name:'Thermal_Engineering-I(BMA-205)',credit:4},
            {name:'Numerical_Techniques_for_engineers(BAS-205)',credit:3},
            {name:'Machine_Drawing_Lab(BMA-207)',credit:1},
            {name:'Operations_Management(BMA-210)',credit:4},
            {name:'Engineering_Measurement_and_Metrology(BMA-209)',credit:4}
            
        ],{
            ignoreDuplicates:true
        })

    }
    catch(er){
        console.log(er)
    }
}

seed2()


const it_3 = db.define('it_3',{
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

const seed3=async()=>{
    try{

        await db.sync()
        await it_3.bulkCreate([
            {name:'Data_Structures(BCS-201)',credit:4},
            {name:'Database_Management_system(BIT-201)',credit:4},
            {name:'Discrete_Structures(BIT-203)',credit:4},
            {name:'Generic_Open_Elective(GEC-201)',credit:2},
            {name:'Industrial_Training_Or_Internship(BIT-253)',credit:1},
            {name:'Material_Sc._and_Eng.(BAS-201)_OR_Numerical_Methods(BAS-203)_OR_Analog_and_Digital_Elec.(BEC-209)_OR_Eng._Measurement_and_Meterology.(BMA-209)',credit:4}
        ],{
            ignoreDuplicates:true
        })

    }
    catch(er){
        console.log(er)
    }
}

seed3()


const ece_3 = db.define('ece_3',{
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

const seed4=async()=>{
    try{

        await db.sync()
        await ece_3.bulkCreate([
            {name:'Analog_Electronics(BEC-201)',credit:4},
            {name:'Signal_and_Systems(BEC-203)',credit:4},
            {name:'Network_Analysis_and_Synthesis(BEC-205)',credit:4},
            {name:'Digital_Electronics(BEC-207)',credit:4},
            {name:'Generic_Open_Elective(GEC-201)',credit:2},
            {name:'Industrial_Training_Or_Internship(BEC-253)',credit:1},
            {name:'Material_Sc._and_Eng.(BAS-201)_OR_Numerical_Methods(BAS-203)_OR_Data_Structures(BCS-201)_OR_DBMS(BIT-201)_Eng._Measurement_and_Meterology.(BMA-211)',credit:4}
        ],{
            ignoreDuplicates:true
        })

    }
    catch(er){
        console.log(er)
    }
}

seed4()


db.sync()
.then(()=>{
    console.log("db synced")
})
.catch((er)=>{
    console.log("error in syncing")
})

module.exports={
    cse_3,it_3,ece_3,mech_3
}