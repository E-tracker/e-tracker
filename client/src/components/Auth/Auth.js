import React,{useState} from 'react'
import { Avatar,Button,Container, Grid, Paper, Typography } from "@material-ui/core";

import Input from './Input'

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

    return (
        <Container component="main" maxWidth="xs">
            <Paper>
                <Avatar></Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up': 'Sign In'}</Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container>
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
                    <Button type="submit" fullWidth variant="contained" color="primary">{isSignup ? 'Sign Up':'Sign In'}</Button>
                    <Grid>
                        <Grid>
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
