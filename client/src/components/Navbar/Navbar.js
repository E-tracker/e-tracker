
import { AppBar, Badge, IconButton,InputBase,Toolbar, Typography } from '@material-ui/core'
import Logout from '@material-ui/icons/ExitToApp'
import SearchIcon from '@material-ui/icons/Search'
import MenuIcon from '@material-ui/icons/Menu'
import logo from '../../assets/e-tracker-logo.jpg'
import useStyles from './styles'


const Navbar = () => {
    const classes = useStyles()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.grow}></div>
                    <Typography variant="h4" className={classes.title} color="inherit">
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
                    <div className={classes.button}>
                        <IconButton aria-label="Log out from E-tracker" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <Logout />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar