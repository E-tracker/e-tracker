import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


import eventRoutes from './routes/events.js'
import userRoutes from './routes/users.js'

dotenv.config({ path: './config/config.env' })

const app = express()

app.use(bodyParser.json({ limit:"30mb",extended:true }))
app.use(bodyParser.urlencoded({ limit:"30mb",extended:true }))
app.use(cors())



// set global variable
app.use(function(req,res,next){
    res.locals.user = req.user || null
    next()
})

app.use('/events',eventRoutes)
app.use('/users',userRoutes) 

const PORT = process.env.PORT
const CONNECTION_URL = process.env.CONNECTION_URL


mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true, useUnifiedTopology:true })
    .then(()=>app.listen(PORT,()=>console.log(`Database connected`)))
    .catch((err)=>console.log(err)) 

mongoose.set('useFindAndModify',false)
 