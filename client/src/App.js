import React from 'react'

import { AppBar, Typography,Container, Grid, Grow } from '@material-ui/core'
import Navbar from './components/Navbar/Navbar'
import Events from './components/Events/Events'
import Form from './components/Form/Form'

import './index.css'

import useStyles from './styles'

function App() {
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
            <Navbar />
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="center" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Events />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
  );
}

export default App;
