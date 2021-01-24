import { AUTH } from '../constants/actionTypes'
import * as api from '../api'


export const signIn = (formData,history) => async(dispatch) => {
    try {
        const { data } = await api.signIn(formData)
        dispatch({type:AUTH,data})
        history.push('/')
    } catch (error) {
        if(error.response){
            console.log(error.response);
        }else if(error.request){
            console.log(error.request);
        }else if(error.message){
            console.log(error.message)
        }
    }
}
export const signUp = (formData,history) => async(dispatch) => {
    try {
        const { data } = await api.signUp(formData)
        dispatch({type:AUTH,data})
        history.push('/')
    } catch (error) {
        if(error.response){
            console.log(error.response);
        }else if(error.request){
            console.log(error.request);
        }else if(error.message){
            console.log(error.message)
        }
    }
}