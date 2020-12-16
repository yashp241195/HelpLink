import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
}));

const UpdateProfileForm = () => {

    const classes = useStyles();
    const [gender, setGender] = React.useState('Other');
    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    

    const gender_options = [
        {
          value: 'Male',
          label: 'Male',
        },
        {
          value: 'Female',
          label: 'Female',
        },
        {
          value: 'Other',
          label: 'Other',
        }
      ];


    return (
        <div>
            <form className={classes.root}  noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <br/>
                <TextField
                    id="standard-select-currency"
                    select
                    variant="outlined"
                    label="Gender"
                    value={gender}
                    onChange={handleGenderChange}
                    helperText="Please select your gender"
                    >
                    {gender_options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </form>
            <br/>
        </div>
    )
}

export default UpdateProfileForm
