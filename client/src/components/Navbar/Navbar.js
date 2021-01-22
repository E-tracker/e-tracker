import React,{ useState,useEffect } from "react"
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core'
import { useHistory,useLocation,Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'

import logo from '../../assets/e-tracker-logo.jpg'
import useStyles from './styles'


const Navbar = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const history = useHistory()

    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const classes = useStyles()

    const logout = () => {
        dispatch({ type:'LOGOUT' })
        history.push('/')
        setUser(null)
    }

    useEffect(()=>{
        const token = user?.token

        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])

    return (

        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <img className={classes.image} src={logo} alt="icon" height="60" />
                <Typography component={Link} to="/" className={classes.heading} variant="h4" align="center">E-tracker</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                        <Button variant="contained" color="secondary" className={classes.logout} onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
            
    )
}

export default Navbar