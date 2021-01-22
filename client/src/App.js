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
  )
}

export default App;
