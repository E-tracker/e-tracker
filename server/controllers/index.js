import eventModel from "../models/EventModel.js";

export const getHome = () => {}
export const getDashboard = async(req,res) => {
    try {
        const userStories = await eventModel.find({ user:req.user.id })
        res.status(200).json(userStories)        
    } catch (error) {
        res.status(400).json({ message:error.message })        
    }
}