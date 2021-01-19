import React,{useState,useEffect} from 'react'

import {Container,Grow,Grid} from '@material-ui/core'

import {useDispatch} from 'react-redux'
import {getEvents} from '../../actions/events'

import Events from '../Events/Events'
import Form from '../Form/Form'
import useStyles from './styles'

const Home = () => {
    const [currentId,setCurrentId] = useState(null)
    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getEvents())
    },[currentId,dispatch])
    return (
        <Grow in>
            <Container>
                <Grid className={classes.mainContainer} container justify="space-between" alignItems="center" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Events setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
