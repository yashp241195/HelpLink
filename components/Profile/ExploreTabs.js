import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import MyProfile from './MyProfile/MyProfile'
import Settings from './Settings/Settings'
import Payment from './Payment/Payment'
import UpdateProfileForm from '../Profile/MyProfileCardSwiper/UpdateProfileForm'

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
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab style={{ textTransform: 'none', }} label="Profile" {...a11yProps(0)} />
          <Tab style={{ textTransform: 'none', }} label="Update" {...a11yProps(1)} />
          <Tab style={{ textTransform: 'none', }} label="Settings" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MyProfile />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UpdateProfileForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Settings />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Payment />
      </TabPanel>
    </div>
  );
}