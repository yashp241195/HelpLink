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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Message = () => {

    const classes = useStyles();

    const messages_list = [
        {   
            name: "yashp2411", 
            message_info:" Hello ", 
            time_info:" 1 h ", 
        },
        {   
            name: "yashp2411", 
            message_info:" Hello ", 
            time_info:" 1 h ", 
        },
        {   
            name: "yashp2411", 
            message_info:" Hello ", 
            time_info:" 1 h ", 
        },{   
            name: "yashp2411", 
            message_info:" Hello ", 
            time_info:" 1 h ", 
        },{   
            name: "yashp2411", 
            message_info:" Hello ", 
            time_info:" 1 h ", 
        },{   
            name: "yashp2411", 
            message_info:" Hello ", 
            time_info:" 1 h ", 
        },{   
            name: "yashp2411", 
            message_info:" Hello ", 
            time_info:" 1 h ", 
        },{   
            name: "yashp2411", 
            message_info:" Hello ", 
            time_info:" 1 h ", 
        },{   
            name: "yashp2411", 
            message_info:" Hello ", 
            time_info:" 1 h ", 
        },
        
    ] 

    const messagebox = (i, name, message_info, time_info) =>
            <ListItem key={i} button>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText 
                    primary={name} 
                    secondary={message_info+ " . "+ time_info + ""} 
                />
            </ListItem>
    
    const message_item_left = (message) => 
        <div style={{ 
            borderRadius:'50%',
            display:'flex',
        }} >
            <div style={{
                borderRadius:'15px 5px',
                background:'lightgreen', 
                color:'#000', padding:10,
                marginBottom:10
            }}>
                {message}
            </div>
            <div style={{flexGrow:1}} ></div>
        </div>

    const message_item_right = (message) => 
            <div style={{ 
                display:'flex',
            }} >
                <div style={{flexGrow:1}} ></div>
                <div style={{
                    borderRadius:'15px 5px',
                    background:'lightblue', 
                    color:'#000', padding:10,
                    marginBottom:10
                }}>
                    {message}
                </div>
            </div>
     
    const message_sender = <div style={{ 
            marginBottom:'50px', 
            display:'flex' 
        }} >
            <OutlinedInput
                style={{ width:'100%', }}
                variant="outlined"
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                        <AddAPhotoIcon />
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="start">
                        <SentimentSatisfiedAltIcon />
                        <TelegramIcon/>
                    </InputAdornment>
                }
            />
        </div>

    return (
        <div style={{marginTop:0, marginBottom:30, marginTop:10}}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Paper style={{ height: 500}} className={classes.paper}>
                        
                        <div style={{display:'flex', padding:5}}>

                            <div style={{flexGrow:1}} ></div>

                            <Button style={{marginRight:5}}
                            startIcon={<ChatOutlinedIcon />}
                            size="small" color="secondary" 
                            variant="outlined">Chat</Button>

                            <Button style={{marginRight:5}}
                            startIcon={<FaceOutlinedIcon />}
                            size="small" color="secondary" 
                            variant="outlined">Matches</Button>

                        </div>
                        
                        <TextField 
                            id="outlined-basic" 
                            style={{
                                width:'100%', 
                                padding:10
                            }} 
                            variant="outlined" 
                        />  
                        <List style={{overflowY:'scroll', height:380}} className={classes.root}>
                            {
                                messages_list.map( (item, i) => {
                                    return messagebox(i, item.name, item.message_info, item.time_info)
                                })
                            } 
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Grid item xs={12} >
                        <Paper className={classes.paper}>
                            <div style={{ display:'flex', }}>
                                <div style={{
                                    margin:10, overflowY:'scroll',
                                    padding:20, height: 400, width:'100%'
                                    }}>
                                    { message_item_left('Hey !!') } 
                                    { message_item_right('Hey !!') }
                                    { message_item_left('Hey !!') } 
                                    { message_item_right('Hey !!') } 
                                    { message_item_left('Hey !!') } 
                                    { message_item_right('Hey !!') } 
                                    { message_item_left('Hey !!') } 
                                    { message_item_right('Hey !!') } 
                                    { message_item_right('Hey !!') } 
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} >
                        <Paper className={classes.paper}>
                            <div style={{ display:'flex', }}>
                                <div style={{margin:10, height: 60, width:'100%'}}>
                                    { message_sender }
                                </div>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Message
