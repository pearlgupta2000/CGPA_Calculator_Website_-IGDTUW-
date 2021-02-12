// const {cse_4,it_4,ece_4,mech_4,csai_4} = require('../../db/4sem')

// const route=require('express').Router()


// route.get('/cse',(req,res)=>{

//      cse_4.findAll()
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

//     it_4.findAll()
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

//     ece_4.findAll()
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

//     mech_4.findAll()
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

//     csai_4.findAll()
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