import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Test from './Test';
import {makeStyles} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  

const MyProfileCardSwiper = () => {

    

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        <Test />
                    </Paper>
                </Grid>                
            </Grid>
        </div>
    )
}

export default MyProfileCardSwiper
