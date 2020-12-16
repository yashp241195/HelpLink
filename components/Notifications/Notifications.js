import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
// import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import MicIcon from '@material-ui/icons/Mic';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import TelegramIcon from '@material-ui/icons/Telegram';

import Button from '@material-ui/core/Button'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import FaceOutlinedIcon from '@material-ui/icons/FaceOutlined';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: 660,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Notifications = () => {

    const classes = useStyles();

    const messages_list = [
        {   
            name: "Matched", 
            message_info:" You are matched with Sakshi ", 
        },
        {   
            name: "Liked", 
            message_info:" Sakshi liked you ", 
        },{   
            name: "Superliked", 
            message_info:" Sakshi sent you superlike ", 
        },
        {   
            name: "Message", 
            message_info:" Sakshi : Hey ", 
        },
        {   
            name: "Subscription", 
            message_info:" Your subscription is renewed now, vaild till March, 2021 ", 
        },
        {   
            name: "Offer", 
            message_info:" Get more attention with our new plan ", 
        },
         
    ] 

    const notificationItem = (i, message_type, message_info) =>
            <ListItem key={i}  button>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText 
                    primary={message_type} 
                    secondary={message_info} 
                />
            </ListItem>
    
    
    
    return (
        <div style={{marginTop:0, marginBottom:30, marginTop:10}}>
            <Grid container spacing={1}>
                <Grid item xs={10}>
                    <Paper style={{ height: 500,}} className={classes.paper}>
                        
                        <List style={{overflowY:'scroll', height:480}} className={classes.root}>
                            {
                                messages_list.map( (item, i) => {
                                    return notificationItem(i, item.name, item.message_info)
                                })
                            } 
                        </List>
                    </Paper>
                </Grid>
                
            </Grid> 
        </div>
    )
}

export default Notifications
