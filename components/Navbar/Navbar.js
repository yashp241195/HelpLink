import React,{useState} from 'react'

import IconButton from '@material-ui/core/IconButton';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import WorkIcon from '@material-ui/icons/Work';
import ExploreIcon from '@material-ui/icons/Explore';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close'
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import TextField from '@material-ui/core/TextField';

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

const Navbar = (props) => {

    return (
        <div style={{marginLeft:20, marginRight:30,}}>
            <div style={{height:50,marginBottom:5,marginTop:5,display:"flex"}}>
                <div style={{display:"flex",marginTop:15, marginRight:5}} >
                    <img src="icons/dateme.png" height="35" />
                </div>
                <h2>Datemee</h2>                
            </div>
            <div style={{marginTop:50,}}>{props.children}</div>
            <Footer/>
        </div>
    )
}

export default Navbar
