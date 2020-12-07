import React from 'react'

import { Card, CardMedia, Typography, Button, CardContent, CardActions } from '@material-ui/core'

// Icons
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import moment from 'moment'

import {useDispatch} from 'react-redux'

import useStyles from './styles'
import { deleteEvent, likeEvent } from '../../../actions/events';

const Event = ({ event,setCurrentId }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={event.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={event.title}></CardMedia>
            <div className={classes.overlay}>
                <Typography variant="h6">{event.host}</Typography>
                <Typography variant="body2">{moment(event.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={()=>setCurrentId(event._id)}>
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{event.tags.map((tag)=>`-${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{event.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{event.description}</Typography>
            </CardContent>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{event.eventDate}</Typography>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={()=>dispatch(likeEvent(event._id))} >
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp;Like&nbsp;{event.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={()=>dispatch(deleteEvent(event._id))} >
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Event
