import React from 'react'
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import { Container} from '@material-ui/core'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth'

import './index.css'

function App() {
  
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/auth" component={Auth}></Route>
        </Switch>
      </Container>
    </Router>
    // <Router>
    //   <Container maxWidth="lg">
    //       <Switch>
    //         <Route exact path="/">
    //         <Grid container className={classes.empty}></Grid>
    //         <Grid container justify="center" alignItems="center">

    //         <Card className={classes.root}>
    //           <CardActionArea>
    //             <CardMedia className={classes.media} image={logo}></CardMedia>
    //             <CardContent>
    //               <Typography variant="h5">E-tracker</Typography>
    //               <Typography variant="body1" color="textSecondary">A platform for users to ......................................................................</Typography>
    //             </CardContent>
    //           </CardActionArea>
    //           <CardActions>
    //             <Button component={Link} to="/host" className={classes.button} size="large" variant="outlined" color="primary">Login</Button>
    //             <Login />
    //           </CardActions>
    //         </Card>
    //         </Grid>
    //         </Route>
    //         <Route exact path="/host">
    //           <AppBar position="fixed" className={classes.appBar} color="inherit">
    //             <Navbar />
    //           </AppBar>
    //           <Grid container className={classes.empty}></Grid>
    //           <Grow in>
    //               <Container>
    //                   <Grid className={classes.mainContainer} container justify="space-between" alignItems="center" spacing={3}>
    //                       <Grid item xs={12} sm={7}>
    //                           <Events setCurrentId={setCurrentId} />
    //                       </Grid>
    //                       <Grid item xs={12} sm={4}>
    //                           <Form currentId={currentId} setCurrentId={setCurrentId} />
    //                       </Grid>
    //                   </Grid>
    //               </Container>
    //           </Grow>
    //         </Route>
    //         <Route exact path="/dashboard">
    //           <AppBar position="fixed" className={classes.appBar} color="inherit">
    //             <Navbar />
    //           </AppBar>
    //           <Grid container className={classes.empty}></Grid>
    //           <Grow in>
    //               <Container>
    //                   <Grid className={classes.mainContainer} container justify="space-between" alignItems="center" spacing={3}>
    //                       <Grid item xs={12} sm={7}>
    //                         <Events setCurrentId={setCurrentId} />
    //                       </Grid>
    //                   </Grid>
    //               </Container>
    //           </Grow>
    //         </Route>
    //       </Switch>
    //   </Container>
    // </Router>
  )
}

export default App;
