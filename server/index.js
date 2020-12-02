import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// import event routes
import eventRoutes from './routes/events.js'


const app = express()
dotenv.config()

app.use(bodyParser.json({ limit:"30mb",extended:true }))
app.use(bodyParser.urlencoded({ limit:"30mb",extended:true }))
app.use(cors())


app.use('/events',eventRoutes)

const PORT = process.env.PORT || 5000
const CONNECTION_URL = 'mongodb+srv://dipzzz234:OZQmjwygs0wMUv9y@cluster0.zzavh.mongodb.net/<dbname>?retryWrites=true&w=majority'


mongoose.connect(CONNECTION_URL,{ useNewUrlParser:true, useUnifiedTopology:true })
    .then(()=>app.listen(PORT,()=>console.log(`server running on port ${PORT}`)))
    .catch((err)=>console.log(err))

mongoose.set('useFindAndModify',false)
 