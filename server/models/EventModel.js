import mongoose from 'mongoose'

const eventSchema = mongoose.Schema({
    title:String,
    description:String,
    host:String,
    tags: [String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0 
    },
    createdAt:{
        type:Date,
        default: new Date()
    },
    eventDate:Date,
    eventTime:Date
})

const eventModel = mongoose.model('eventModel',eventSchema)

export default eventModel