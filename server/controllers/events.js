import eventModel from "../models/EventModel.js";



export const getEvent = async (req,res) => {
    try {
        const eventModels = await eventModel.find()
        res.status(200).json(eventModels)
    } catch (error) {
        res.status(400).json({ message:error.message })
    }
}


export const createEvent = async (req,res)=>{
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