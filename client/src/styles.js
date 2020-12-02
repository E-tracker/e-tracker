import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme)=>({
   heading:{}, 
   image:{
        marginLeft:'15px'
   },
   [theme.breakpoints.down("sm")]:{
       mainContainer:{
           flexDirection:'column-reverse'
       }
   } 
}))