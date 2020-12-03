import axios from 'axios'

const url = 'http://localhost:5000/events'

export const fetchEvent = ()=>axios.get(url)
export const createEvent = (newEvent)=>axios.post(url,newEvent)
export const updateEvent = (id,updatedEvent)=>axios.patch(`${url}/${id}`,updatedEvent)
export const deleteEvent = (id)=>axios.delete(`${url}/${id}`)
export const likeEvent = (id)=>axios.patch(`${url}/${id}/likeEvent`)