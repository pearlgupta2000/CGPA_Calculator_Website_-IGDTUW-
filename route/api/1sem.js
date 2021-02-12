const cse_1 = require('../../db/1sem').cse_1

const route=require('express').Router()


route.get('/',(req,res)=>{

     cse_1.findAll()
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