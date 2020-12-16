import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChatIcon from '@material-ui/icons/Chat';
import HelpIcon from '@material-ui/icons/Help';
import ExploreIcon from '@material-ui/icons/Explore';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper'
import Link from 'next/link'

import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(1),
  },
  menuButton: {
    marginRight: 36,
  },
}),
{
    name: "MuiCustomStyleDrawerNavbar"
});

export default function PermanentDrawerLeft(props) {
  const classes = useStyles();

 
  return (
    <div className={classes.root} >
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar style={{background:'#fff'}}>
        
        </Toolbar>
      </AppBar>
      <Drawer
        
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        
        anchor="left"
      >
        <Paper elevation={3} >
        <div style={{background:'#fff'}} className={classes.toolbar} >
          <div style={{height:50,marginLeft:35, marginBottom:5, display:"flex"}}>
              <div style={{display:"flex",marginTop:15, marginRight:5}} >
                <img src="icons/dateme.png" height="30" />
              </div>
              <h2 style={{color:'#ed5168', marginTop:15,  fontFamily:'serif' }}  > Datemee </h2>
          </div>
        </div>
        </Paper>
        <Divider />
        <List>
          {[
              {name:'Explore',icon:<ExploreIcon/>,path:'/explore'},
              {name:'Questions',icon:<HelpIcon/>,path:'/questions'},
              {name:'Counselling',icon:<SentimentVerySatisfiedIcon/>,path:'/counselling'},
              {name:'Messages',icon:<ChatIcon/>,path:'/messages'},
              {name:'Notifications',icon:<NotificationsIcon/>,path:'/notifications'},
              {name:'Profile',icon:<AccountCircleIcon/>,path:'/profile'},

          ].map((item, index) => (
            <Link href={item.path}>
              <ListItem button key={item.name}>
                  <ListItemIcon>
                      {item.icon}
                  </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </Link>
          ))}
        </List>

      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            {props.children}
      </main>
    </div>
  );
}
