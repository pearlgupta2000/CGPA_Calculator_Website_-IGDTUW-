// const {cse_5,it_5,ece_5,mech_5,csai_5} = require('../../db/5sem')

// const route=require('express').Router()


// route.get('/cse',(req,res)=>{

//      cse_5.findAll()
//         .then((subj)=>{
//             res.status(200).send(subj)
//         })
//         .catch((err)=>{
//             res.status(500).send({
//                 error:"Could not find"
//             })
//         })
// })

// route.get('/it',(req,res)=>{

//     it_5.findAll()
//        .then((subj)=>{
//            res.status(200).send(subj)
//        })
//        .catch((err)=>{
//            res.status(500).send({
//                error:"Could not find"
//            })
//        })
// })

// route.get('/ece',(req,res)=>{

//     ece_5.findAll()
//        .then((subj)=>{
//            res.status(200).send(subj)
//        })
//        .catch((err)=>{
//            res.status(500).send({
//                error:"Could not find"
//            })
//        })
// })

// route.get('/mech',(req,res)=>{

//     mech_5.findAll()
//        .then((subj)=>{
//            res.status(200).send(subj)
//        })
//        .catch((err)=>{
//            res.status(500).send({
//                error:"Could not find"
//            })
//        })
// })

// route.get('/csai',(req,res)=>{

//     csai_5.findAll()
//        .then((subj)=>{
//            res.status(200).send(subj)
//        })
//        .catch((err)=>{
//            res.status(500).send({
//                error:"Could not find"
//            })
//        })
// })


// module.exports={
//     route
// }