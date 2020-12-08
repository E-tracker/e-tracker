import { Typography } from '@material-ui/core'

import useStyles from './styles'

const CountDown = ({event}) => {
    const classes = useStyles()
    return(
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{event.eventDate}</Typography>
    )
}

export default CountDown