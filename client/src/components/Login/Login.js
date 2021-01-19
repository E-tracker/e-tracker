import React from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory()

    const onSuccessGoogle = (response) => {
        const {Mt} = response
        const user = Mt.Ed
        console.log(user);
        history.push('/dashboard')
    }

    return (
        <GoogleLogin 
            clientId='242599073824-s1eaq5s5juf5bg40qnvioopjlqb1va4j.apps.googleusercontent.com'
            buttonText="Login to e-Tracker"
            onSuccess={(response)=>onSuccessGoogle(response)}
        />
    )
}

export default Login
