import React,{useState} from 'react'

import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import WorkIcon from '@material-ui/icons/Work';
import ExploreIcon from '@material-ui/icons/Explore';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close'
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
// import TextField from '@material-ui/core/TextField';

import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import {NavIcons} from '../Utils/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Footer from '../Footer/Footer'

import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'

import ClearIcon from '@material-ui/icons/Clear';


const HomeNavbar = (props) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <Paper elevation={3}>
        <div style={{
            background:'#fff', 
            margin:0, position:'absolute', 
            top:'10%', left:'35%',right:'35%', 
            bottom:'10%'
        }} >
            <div style={{display:'flex'}} >
                <div style={{flexGrow:1}} />
                <div>
                    <Button onClick={handleClose}> 
                        <ClearIcon />
                    </Button>
                </div>
            </div>
            <center>
                <h2>Login</h2>
                <form  noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <br/>
                <br/>
                <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
                <br/>
                <br/>
                <Button style={{textTransform: 'none'}} variant="outlined" color="primary"> Log in </Button>
                <br/>
                <br/>
                 or
                <br/>
                <br/>
                <Button style={{textTransform: 'none'}} variant="outlined" color="primary"> Log in with Google </Button>
                </form>
            </center>
        </div>
        </Paper>
      );

    return (
        <div style={{
            marginLeft:20, marginRight:30,
            // backgroundImage:`url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/types-of-flowers-1579719085.jpg')` 
        }}>
            <div style={{height:50,marginBottom:5,marginTop:5,display:"flex"}}>
                <div style={{display:"flex",marginTop:15, marginRight:5}} >
                    <img src="icons/dateme.png" height="35" />
                </div>
                <h2>Datemee</h2>
                <div style={{flexGrow:1}} ></div>
                <Button onClick={handleOpen} color="inherit">Login</Button>                
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            <div style={{marginTop:50,}}>{props.children}</div>
            <Footer/>
        </div>
    )
}

export default HomeNavbar