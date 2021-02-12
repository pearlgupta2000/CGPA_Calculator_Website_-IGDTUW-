const {cse_3,it_3,ece_3,mech_3} = require('../../db/3sem')

const route=require('express').Router()


route.get('/cse',(req,res)=>{

     cse_3.findAll()
        .then((subj)=>{
            res.status(200).send(subj)
        })
        .catch((err)=>{
            res.status(500).send({
                error:"Could not find"
            })
        })
})

route.get('/it',(req,res)=>{

    it_3.findAll()
       .then((subj)=>{
           res.status(200).send(subj)
       })
       .catch((err)=>{
           res.status(500).send({
               error:"Could not find"
           })
       })
})

route.get('/ece',(req,res)=>{

    ece_3.findAll()
       .then((subj)=>{
           res.status(200).send(subj)
       })
       .catch((err)=>{
           res.status(500).send({
               error:"Could not find"
           })
       })
})

route.get('/mech',(req,res)=>{

    mech_3.findAll()
       .then((subj)=>{
           res.status(200).send(subj)
       })
       .catch((err)=>{
           res.status(500).send({
               error:"Could not find"
           })
       })
})

// route.get('/csai',(req,res)=>{

//     csai_3.findAll()
//        .then((subj)=>{
//            res.status(200).send(subj)
//        })
//        .catch((err)=>{
//            res.status(500).send({
//                error:"Could not find"
//            })
//        })
// })


module.exports={
    route
}