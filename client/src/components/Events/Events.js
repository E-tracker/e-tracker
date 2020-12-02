import React from 'react'
import { CircularProgress, Grid } from '@material-ui/core'
import useStyles from './styles'
import Event from './Event/Event'

const events = [
    {"id":1,"title":"nothing","creator":"me","message":".....","tags":["1","2","nothing"]}
]

const Events = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {events.map((event) => (
                <Grid key={event._id} item xs={12} sm={6}>
                    <Event event={event}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default Events