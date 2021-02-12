const Sequelize = require('sequelize')

const db=new Sequelize('cgpa_db','pearl','pearl',{
    host:'localhost',
    dialect:'mysql'
})
db.authenticate()
    .then(()=>{console.log("connected")})
    .catch((err)=>{
        console.error(err)
    })

module.exports={
    db,Sequelize
}    