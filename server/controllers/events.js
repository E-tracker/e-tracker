import eventModel from "../models/EventModel.js";
import mongoose from 'mongoose'


export const getEvent = async (req,res) => {
    try {
        const eventModels = await eventModel.find()
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json(eventModels)
    } catch (error) {
        res.status(400).json({ message:error.message })
    }
}


export const createEvent = async (req,res)=>{
    const event = req.body
    const newEvent = new eventModel({...event,creator:req.userId})

    try {
        await newEvent.save()
        res.status(201).json(newEvent)
    } catch (error) {
        res.status(409).json({ message:error.message })
    }

    res.send()
}

export const updateEvent = async (req,res) => {
    const { id:_id } = req.params
    const event = req.body

    if(!mongoose.Types.ObjectId(_id))
        return res.status(404).send("No event with that id")

    const updatedEvent = await eventModel.findByIdAndUpdate(_id,{...event,_id},{new:true})
    res.json(updatedEvent)
}


export const deleteEvent = async (req,res) => {
    const { id } = req.params 
    if(!mongoose.Types.ObjectId(id))
        return res.status(404).send("No event with that id")

    await eventModel.findByIdAndRemove(id)
    res.json({ message:'Event deleted succesfully' })
}


export const likeEvent = async (req,res) => {
    const { id } = req.params

    if(!req.userId){
        return res.json({ message:"Unauthenticated" })
    }

    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No event with that id:${id}`)

    const event = await eventModel.findById(id)

    const index = event.likeCount.findIndex((id)=> id===String(req.userId))

    if(index === -1){
        event.likeCount.push(req.userId)
    }else{
        event.likeCount = event.likeCount.filter((id)=> id !==String(req.userId))
    }

    const updatedEvent = await eventModel.findByIdAndUpdate(id,event,{ new:true })

    res.status(200).json(updatedEvent)
}