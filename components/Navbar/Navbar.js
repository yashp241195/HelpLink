import React from 'react'

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





const Navbar = (props) => {

    const rightNavItems = [
        {icon:<LocalFloristIcon/> ,title:"Love Wisdom"},
        {icon:<ExploreIcon/> ,title:"Explore"},
        {icon:<FavoriteIcon/> ,title:"Suggestions"},
        // {icon:<NotificationsIcon/> ,title:"Notify"},
        {icon:<AccountCircleIcon/> ,title:"Profile"},
    ]

    return (
        <div style={{marginLeft:20, marginRight:30,}}>
            <div style={{height:50,marginBottom:5,marginTop:5,display:"flex"}}>
                <div >
                    <img src="icons/dateme.png" height="50" />
                </div>
                <div style={{marginLeft:100,marginTop:15}}>
                </div>
                <div style={{flexGrow:1}}></div>
                <div style={{ display:"flex",flexDirection:"row"}}>
                    
                {
                    rightNavItems.map((items, index)=>{

                        return(
                            <IconButton aria-label={items.title}>
                                {items.icon}
                            </IconButton>
                        )
                    })
                }
                </div>
                              
            </div>
            <div style={{marginTop:100,}}>{props.children}</div>
        </div>
    )
}

export default Navbar
