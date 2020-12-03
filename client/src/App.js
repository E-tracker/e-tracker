import React,{useState,useEffect} from 'react'

import { Container, Grid, Grow } from '@material-ui/core'

import {useDispatch} from 'react-redux'
import {getEvents} from './actions/events'

import Navbar from './components/Navbar/Navbar'
import Events from './components/Events/Events'
import Form from './components/Form/Form'

import './index.css'
import useStyles from './styles'

function App() {
  const [currentId,setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getEvents())
  },currentId)
  return (
    <Container maxWidth="lg">
            <Navbar />
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
        </Container>
  );
}

export default App;
