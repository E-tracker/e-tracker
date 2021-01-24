import axios from 'axios'

const API = axios.create({  baseURL: 'https://localhost:5000/'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

const config = {headers:{'Access-Control-Allow-Credentials':true}}

export const fetchEvent = ()=>API.get('/events',config)
export const createEvent = (newEvent)=>API.post('/events',newEvent)
export const updateEvent = (id,updatedEvent)=>API.patch(`/events/${id}`,updatedEvent)
export const deleteEvent = (id)=>API.delete(`/events/${id}`)
export const likeEvent = (id)=>API.patch(`/events/${id}/likeEvent`)

export const signIn = (formData) => API.post('/users/signin',formData)
export const signUp = (formData) => API.post('/users/signup',formData)