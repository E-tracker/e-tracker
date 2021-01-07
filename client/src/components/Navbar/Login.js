import { useState } from "react";
import GoogleLogin from 'react-google-login'

import { Button, IconButton,InputBase,Toolbar, Typography } from '@material-ui/core'
import Exit from '@material-ui/icons/ExitToApp'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Login = () => {
    const [isloggedIn, setIsloggedIn] = useState(false)
    const [user,setUser] = useState('')

    const onSuccessGoogle = (response) => {
        let username = response.wt.Ad
        setUser(username)
        setIsloggedIn(true)
    }

    const Loggin = () => {
        return (<GoogleLogin 
            clientId='242599073824-s1eaq5s5juf5bg40qnvioopjlqb1va4j.apps.googleusercontent.com'
            buttonText="Login to e-Tracker"
            onSuccess={(response)=>onSuccessGoogle(response)}
            />
        )
    }
    const Logout = () => {
        return (
            <>
                <AccountCircleIcon/>
                <Typography>{user}</Typography>
                <IconButton onClick={()=>setIsloggedIn(false)}>
                    <Exit />
                </IconButton> 
            </>
        )
    }
    return (
        !isloggedIn ? <Loggin /> : <Logout />
    )
    
}

export default Login