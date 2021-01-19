import React,{useState} from 'react'
import GoogleLogin from 'react-google-login'
import { Avatar,Button,Container, Grid, Paper, Typography } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Input from './Input'
import Icon from './Icon'

import useStyles from './styles'

const Auth = () => {
    const [isSignup,setIsSignup] = useState(false)
    const classes = useStyles()
    
    const [showPassword,setShowPassword] = useState(false)
    const handleShowPassword = () => setShowPassword(!showPassword)

    const switchMode =() => {
        setIsSignup((prevIsSignup)=>!isSignup)
        setShowPassword(false)
    }

    const handleSubmit = () => {

    }
    const handleChange = () => {

    }

    const googleSuccess = async(response) => {
        const result = await response ?. profileObj
        const token = await response ?. tokenId

        try {
            
        } catch (error) {
            console.log(error)
        }
    }
    const googleFailure = (error) => {
        console.log(error);
    }    

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon /> 
                </Avatar>
                <Typography component="h1" variant="h5">{isSignup ? 'Sign Up': 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} autoFocus half/>
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text": "password"} handleShowPassword={handleShowPassword}/>
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button className={classes.submit} type="submit" fullWidth variant="contained" color="primary">{isSignup ? 'Sign Up':'Sign In'}</Button>
                    <GoogleLogin 
                        clientId='242599073824-s1eaq5s5juf5bg40qnvioopjlqb1va4j.apps.googleusercontent.com'
                        render={(renderProps)=>(
                            <Button className={classes.googleButton} color="primary" variant="contained" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />}>Google Sign In</Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
