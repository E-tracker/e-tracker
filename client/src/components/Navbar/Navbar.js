
import { Button, IconButton,InputBase,Toolbar, Typography } from '@material-ui/core'
import Logout from '@material-ui/icons/ExitToApp'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import logo from '../../assets/e-tracker-logo.jpg'
import useStyles from './styles'

import Login from './Login'


const Navbar = () => {

    const classes = useStyles()

    return (
        <>
            
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.grow}></div>
                    <Typography variant="h5" className={classes.title} color="inherit">
                        <img src={logo} height="50px" alt="logo" className={classes.image}/>
                        -Tracker
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase 
                            placeholder="Search an event"
                        />
                    </div>
                    
                    <Login />        
                    
                </Toolbar>
        </>
    )
}

export default Navbar