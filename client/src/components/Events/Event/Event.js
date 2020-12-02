import React from 'react'

import { Card, CardMedia, Typography, Button, CardContent, CardActions } from '@material-ui/core'

// Icons
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import moment from 'moment'

import useStyles from './styles'

const Event = ({ event }) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={event.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={event.title}></CardMedia>
            <div className={classes.overlay}>
                <Typography variant="h6">{event.creator}</Typography>
                <Typography variant="body2">{moment(event.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size="small" >
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{event.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{event.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" >
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp;Like&nbsp;{event.likeCount}
                </Button>
                <Button size="small" color="primary" >
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Event
