import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import passportInitializer from './config/passport.js'
import passport from 'passport'

import indexRoute from './routes/index.js'
import authRoute from './routes/auth.js'
import eventRoutes from './routes/events.js'


dotenv.config({ path: './config/config.env' })

passportInitializer(passport)

const app = express()

app.use(bodyParser.json({ limit:"30mb",extended:true }))
app.use(bodyParser.urlencoded({ limit:"30mb",extended:true }))
app.use(cors())

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// set global variable
app.use(function(req,res,next){
    res.locals.user = req.user || null
    next()
})


app.use('/',indexRoute)
app.use('/auth',authRoute)
app.use('/events',eventRoutes)

const PORT = process.env.PORT
const CONNECTION_URL = process.env.CONNECTION_URL


mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true, useUnifiedTopology:true })
    .then(()=>app.listen(PORT,()=>console.log(`Database connected`)))
    .catch((err)=>console.log(err)) 

mongoose.set('useFindAndModify',false)
 