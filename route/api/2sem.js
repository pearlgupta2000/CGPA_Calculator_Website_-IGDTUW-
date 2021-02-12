const cse_2 = require('../../db/2sem').cse_2

const route=require('express').Router()


route.get('/',(req,res)=>{

     cse_2.findAll()
        .then((subj)=>{
            res.status(200).send(subj)
        })
        .catch((err)=>{
            res.status(500).send({
                error:"Could not find"
            })
        })
})


module.exports={
    route
}