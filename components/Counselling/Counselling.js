import React from 'react'
import CounsellorItem from './CounsellorItem'
import Paper from '@material-ui/core/Paper/Paper'
import Grid from '@material-ui/core/Grid/Grid'


const Counselling = () => {

    return (
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Paper>
                        <CounsellorItem />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <CounsellorItem />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <CounsellorItem />
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <CounsellorItem />
                    </Paper>
                </Grid>   
            </Grid>
    )
}

export default Counselling
