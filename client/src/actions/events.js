import { CREATE,DELETE,FETCH_ALL,UPDATE } from '../constants/actionTypes'
import * as api from '../api'

// action creators
export const getEvents = () => async(dispatch) => {
    try {
        const { data } = await api.fetchEvent()
        const action = { type:FETCH_ALL, payload:data }
        dispatch(action)
    } catch (error) {
        console.log(error.message)
    }
}

export const createEvent = (event) => async(dispatch) => {
    try {
        const { data } = await api.createEvent(event)
        dispatch({type:CREATE,payload:data})
    } catch (error) {
        console.log(error);
    }
}

export const updateEvent = (id,event) => async(dispatch) => {
    try {
        const { data } = await api.updateEvent(id,event)
        dispatch({type:UPDATE,payload:data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteEvent = (id) => async(dispatch) => {
    try {
        await api.deleteEvent(id)
        dispatch({type:DELETE,payload:id})
    } catch (error) {
        console.log(error);
    }
}

export const likeEvent = (id) => async(dispatch) => {
    try {
        const { data } = await api.likeEvent(id)
        dispatch({type:UPDATE,payload:data})
    } catch (error) {
        console.log(error);
    }
}