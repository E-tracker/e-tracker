import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { Container, Grid, Grow,AppBar, Typography, Card, CardActions, CardActionArea, CardMedia, CardContent, Button } from '@material-ui/core'

import {useDispatch} from 'react-redux'
import {getEvents} from './actions/events'

import Navbar from './components/Navbar/Navbar'
import Events from './components/Events/Events'
import Form from './components/Form/Form'

import logo from './assets/e-tracker-logo.jpg'
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
    <Router>
      <Container maxWidth="lg">
          <Switch>
            <Route exact path="/">
            <Grid container className={classes.empty}></Grid>
            <Grid container justify="center" alignItems="center">

            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={logo}></CardMedia>
                <CardContent>
                  <Typography variant="h5">E-tracker</Typography>
                  <Typography variant="body1" color="textSecondary">A platform for users to ......................................................................</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button className={classes.button} size="large" variant="outlined" color="primary">Login</Button>
              </CardActions>
            </Card>
            </Grid>
            </Route>
            <Route exact path="/host">
              <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Navbar />
              </AppBar>
              <Grid container className={classes.empty}></Grid>
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
            </Route>
            <Route exact path="/dashboard">
              <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Navbar />
              </AppBar>
              <Grid container className={classes.empty}></Grid>
              <Grow in>
                  <Container>
                      <Grid className={classes.mainContainer} container justify="space-between" alignItems="center" spacing={3}>
                          <Grid item xs={12} sm={7}>
                            <Events setCurrentId={setCurrentId} />
                          </Grid>
                      </Grid>
                  </Container>
              </Grow>
            </Route>
          </Switch>
      </Container>
    </Router>
  );
}

export default App;
