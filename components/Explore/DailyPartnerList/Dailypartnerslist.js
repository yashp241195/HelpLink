import React from 'react'
import SelectPartnerCard from '../SelectPartnerCard/SelectPartnerCard'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(0),
      color: theme.palette.text.secondary,
    },
  }));

const Dailypartnerslist = () => {
    const classes = useStyles();

    const li = {
        dailySuggestions:[
            {
                name:"Simran",
                gender:"female",
                age:22,
                location:"Delhi",
                gps:"(123.2,77.5)",
                preferance:{
                    gender:"male",
                    ageGroup:"20-25",
                    distanceRadius:"20km"
                },
            },
        ]
    }

    return (
        <div>
            <br/>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <SelectPartnerCard />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <SelectPartnerCard />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <SelectPartnerCard />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <SelectPartnerCard />
                    </Paper>
                </Grid>
            </Grid>
            <br/>
            <pre>
                { JSON.stringify(li,null,2) }
            </pre>
        </div>
    )
}

export default Dailypartnerslist
