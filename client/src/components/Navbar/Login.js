import { useState } from "react";
import GoogleLogin from 'react-google-login'

import { Button, IconButton,InputBase,Toolbar, Typography } from '@material-ui/core'
import Exit from '@material-ui/icons/ExitToApp'

const Login = () => {
    const [isloggedIn, setIsloggedIn] = useState(false)

    console.log(isloggedIn);


    const Login = () => {
        return (<GoogleLogin 
            clientId='242599073824-s1eaq5s5juf5bg40qnvioopjlqb1va4j.apps.googleusercontent.com'
            buttonText="Login to e-Tracker"
            onSuccess={()=>setIsloggedIn(true)}
            />
        )
    }
    const Logout = () => {
        return (
            <IconButton onClick={()=>setIsloggedIn(false)}>
                <Exit />
            </IconButton> 
        )
    }
    return (
        !isloggedIn ? <Login /> : <Logout />
    )
    
}

export default Login