import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import QuestionCard from '../Questions/QuestionCard/QuestionCard'
import PhoneIcon from '@material-ui/icons/Phone';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import QuestionTypeCard from '../Questions/QuestionTypeCard'
import QuestionLiked from '../Questions/QuestionLiked'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar 
      
      position="static" color="default" >
        <Tabs 
        
        value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab style={{ textTransform: 'none', }} label="Suggestions" {...a11yProps(0)} />
          <Tab style={{ textTransform: 'none', }} label="Topic-Wise" {...a11yProps(1)} />
          <Tab style={{ textTransform: 'none', }} label="Liked" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={0}>
            <Grid item xs={7} >
                <QuestionCard />
            </Grid>
            <Grid item xs={4} >
                <Paper elevation={1} >
                  <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                      <ListItemText primary="Inbox"
                      secondary={
                        <React.Fragment>
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            Ali Connors
                          </Typography>
                          {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                      }                              
                    />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Drafts" />
                    </ListItem>
                  </List>
                </Paper>
            </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <Grid container spacing={2} >
            <Grid item xs={3} >
              <QuestionTypeCard />
            </Grid>
            <Grid item xs={3} >
              <QuestionTypeCard />
            </Grid>
            <Grid item xs={3} >
              <QuestionTypeCard />
            </Grid>
            <Grid item xs={3} >
              <QuestionTypeCard />
            </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <QuestionLiked />
      </TabPanel>
    </div>
  );
}