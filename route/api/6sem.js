// const {cse_6,it_6,ece_6,mech_6,csai_6} = require('../../db/6sem')

// const route=require('express').Router()


// route.get('/cse',(req,res)=>{

//      cse_6.findAll()
//         .then((subj)=>{
//             res.status(200).send(subj)
//         })
//         .catch((err)=>{
//             res.status(600).send({
//                 error:"Could not find"
//             })
//         })
// })

// route.get('/it',(req,res)=>{

//     it_6.findAll()
//        .then((subj)=>{
//            res.status(200).send(subj)
//        })
//        .catch((err)=>{
//            res.status(600).send({
//                error:"Could not find"
//            })
//        })
// })

// route.get('/ece',(req,res)=>{

//     ece_6.findAll()
//        .then((subj)=>{
//            res.status(200).send(subj)
//        })
//        .catch((err)=>{
//            res.status(600).send({
//                error:"Could not find"
//            })
//        })
// })

// route.get('/mech',(req,res)=>{

//     mech_6.findAll()
//        .then((subj)=>{
//            res.status(200).send(subj)
//        })
//        .catch((err)=>{
//            res.status(600).send({
//                error:"Could not find"
//            })
//        })
// })

// route.get('/csai',(req,res)=>{

//     csai_6.findAll()
//        .then((subj)=>{
//            res.status(200).send(subj)
//        })
//        .catch((err)=>{
//            res.status(600).send({
//                error:"Could not find"
//            })
//        })
// })


// module.exports={
//     route
// }