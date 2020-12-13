import eventModel from "../models/EventModel.js";
import mongoose from 'mongoose'


export const getEvent = async (req,res) => {
    try {
        const eventModels = await eventModel.find()
        res.status(200).json(eventModels)
    } catch (error) {
        res.status(400).json({ message:error.message })
    }
}


export const createEvent = async (req,res)=>{
    req.body.user = req.body.id
    const event = req.body
    const newEvent = new eventModel(event)

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
    if(!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No event with that id")

    const event = await eventModel.findById(id)
    const updatedEvent = await eventModel.findByIdAndUpdate(id,{ likeCount : event.likeCount + 1 },{ new:true })

    res.json(updatedEvent)
}