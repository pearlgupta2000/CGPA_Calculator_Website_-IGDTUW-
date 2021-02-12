// const {cse_8,it_8,ece_8,mech_8,csai_8} = require('../../db/8sem')

// const route=require('express').Router()


// route.get('/cse',(req,res)=>{

//      cse_8.findAll()
//         .then((subj)=>{
//             res.status(200).send(subj)
//         })
//         .catch((err)=>{
//             res.status(800).send({
//                 error:"Could not find"
//             })
//         })
// })

// route.get('/it',(req,res)=>{

//     it_8.findAll()
//        .then((subj)=>{
//            res.status(200).send(subj)
//        })
//        .catch((err)=>{
//            res.status(800).send({
//                error:"Could not find"
//            })
//        })
// })

// route.get('/ece',(req,res)=>{

//     ece_8.findAll()
//        .then((subj)=>{
//            res.status(200).send(subj)
//        })
//        .catch((err)=>{
//            res.status(800).send({
//                error:"Could not find"
//            })
//        })
// })

// route.get('/mech',(req,res)=>{

//     mech_8.findAll()
//        .then((subj)=>{
//            res.status(200).send(subj)
//        })
//        .catch((err)=>{
//            res.status(800).send({
//                error:"Could not find"
//            })
//        })
// })

// route.get('/csai',(req,res)=>{

//     csai_8.findAll()
//        .then((subj)=>{
//            res.status(200).send(subj)
//        })
//        .catch((err)=>{
//            res.status(800).send({
//                error:"Could not find"
//            })
//        })
// })


// module.exports={
//     route
// }