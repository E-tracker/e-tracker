import React from 'react'
import { Paper, TextField, Typography, Button } from "@material-ui/core";
import FileBase from 'react-file-base64'
import useStyles from './styles'

const Form = () => {
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
                <Typography variant="h6">Create an Event</Typography>
                <TextField className={classes.fileInput} name="creator" variant="outlined" label="Creator" />
                <TextField className={classes.fileInput} name="title" variant="outlined" label="Title"  />
                <TextField className={classes.fileInput} name="message" variant="outlined" label="Message" />
                <TextField className={classes.fileInput} name="tags" variant="outlined" label="Tags"  />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false}
                        
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" type="submit" size="large" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
