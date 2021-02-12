const route=require('express').Router()

route.use('/1_semester',require('./1sem').route)
route.use('/2_semester',require('./2sem').route)
route.use('/3_semester',require('./3sem').route)
// route.use('/4_semester',require('./2sem').route)
// route.use('/5_semester',require('./2sem').route)
// route.use('/6_semester',require('./2sem').route)
// route.use('/7_semester',require('./2sem').route)
// route.use('/8_semester',require('./2sem').route)


module.exports={
    route
}                