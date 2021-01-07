import React,{useState,useEffect} from 'react'
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import FileBase from 'react-file-base64'
import DateInput from '../DateInput/DateInput'
import TimeInput from '../TimeInput/TimeInput'
import { useDispatch,useSelector } from "react-redux";
import useStyles from './styles'
import {createEvent,updateEvent} from '../../actions/events'

const Form = ({ currentId,setCurrentId }) => {
    const [eventData,setEventData] = useState({title:'',description:'',link:'',host:'',tags:'',selectedFile:'',eventDate:new Date(),eventTime:new Date()})
    const event = useSelector((state)=> currentId ? state.events.find((p)=>p._id === currentId):null)
    const classes = useStyles()
    const dispatch = useDispatch()
    useEffect(()=>{
        if(event) setEventData(event)
    },[event])
    const handleSubmit = async(e)=>{
        e.preventDefault()
        if(currentId){
            dispatch(updateEvent(currentId,eventData))
        }else{
            dispatch(createEvent(eventData))
        }
        clear()
    }
    const clear =()=>{
        setCurrentId(null)
        setEventData({title:'',description:'',link:'',host:'',tags:'',selectedFile:'',eventDate:new Date(),eventTime:new Date()})
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing':'Creating'} an Event</Typography>
                <TextField className={classes.fileInput} name="title" variant="outlined" label="Title"  value={eventData.title} onChange={(e)=>setEventData({...eventData,title:e.target.value})} />
                <TextField className={classes.fileInput} name="host" variant="outlined" label="Host" value={eventData.host} onChange={(e)=>setEventData({...eventData,host:e.target.value})} />
                <TextField className={classes.fileInput} name="description" variant="outlined" label="Description" value={eventData.description} onChange={(e)=>setEventData({...eventData,description:e.target.value})} />
                <TextField className={classes.fileInput} name="link" variant="outlined" label="Registration Link" value={eventData.link} onChange={(e)=>setEventData({...eventData,link:e.target.value})} />
                <TextField className={classes.fileInput} name="tags" variant="outlined" label="Categories" value={eventData.tags} onChange={(e)=>setEventData({...eventData,tags:e.target.value.split(',')})} />
                <DateInput className={classes.fileInput} eventData={eventData} setEventData={setEventData}/>
                <TimeInput className={classes.fileInput} eventData={eventData} setEventData={setEventData}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false}
                        onDone={({base64})=>setEventData({...eventData,selectedFile:base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit" size="large" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" fullWidth onClick={clear}>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
