import React,{useState,useEffect} from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'

import useStyles from './styles'

const CountDown = ({event}) => {
    const classes = useStyles()
    // convert eventDate and eventTime to Date format
    const eventDate = new Date(event.eventDate)
    const eventTime = new Date (event.eventTime)
    // extract eventdate
    let eventYear = eventDate.getFullYear()
    let eventMonth = eventDate.getMonth()
    let eventDay = eventDate.getDate()
    // extract eventTime
    let eventHour = eventTime.getHours()
    let eventMinutes = eventTime.getMinutes()
    // create exact eventDate
    const futureDate = new Date(eventYear,eventMonth,eventDay,eventHour,eventMinutes)

    const calculateTimeLeft = () => {

        // calculate today in ms
        const today = new Date().getTime()

        // find difference in milliseconds
        const t = futureDate.getTime() - today

        let timeLeft = {}

        const oneDay = 24 * 60 * 60 * 1000;
        const oneHour = 60 * 60 * 1000;
        const oneMinute = 60 * 1000;
        // calculate all values

        if(t>0){
            let days = t / oneDay;
            timeLeft = {
                days : Math.floor(days),
                hours : Math.floor((t % oneDay) / oneHour),
                minutes : Math.floor((t % oneHour) / oneMinute),
                seconds : Math.floor((t % oneMinute) / 1000)
            };
        }
        return timeLeft
    }

    const [timeLeft,setTimeLeft] = useState(calculateTimeLeft())

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setTimeLeft(calculateTimeLeft())
        },1000)
        // clear timeout if component is unmounted
        return () => clearTimeout(timer)
    })

    return(
        <Grid container className={classes.root} spacing={2}>
            <Typography variant="h6" color="secondary" component="p">Event will start in...</Typography>
            <Grid item xs={12}>
                <Grid container spacing={3}>
                    <Grid item>
                        <Paper className={classes.paper}>{timeLeft.days}</Paper>
                        <Typography variant="body2" color="textSecondary" component="p">Days</Typography>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper}>{timeLeft.hours}</Paper>
                        <Typography variant="body2" component="p">Hours</Typography>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper}>{timeLeft.minutes}</Paper>
                        <Typography variant="body2" color="textSecondary" component="p">Mins</Typography>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper}>{timeLeft.seconds}</Paper>
                        <Typography variant="body2" component="p">Secs</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default CountDown