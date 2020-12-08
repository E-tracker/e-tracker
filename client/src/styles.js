import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 0;

export default makeStyles((theme)=>({
    appBar: {
        color: '#212121',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        },
    },
    empty:{
        padding:'60px'
    },
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