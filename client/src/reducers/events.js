import { CREATE,DELETE,FETCH_ALL,UPDATE } from '../constants/actionTypes'

export default (events=[],action) => {
    switch(action.type){
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...events,action.payload]
        case UPDATE:
            return  events.map((event)=>event._id === action.payload._id ? action.payload : event)  
        case DELETE:
            return  events.filter((event)=>event._id !== action.payload)
        default:
            return events
    }
}