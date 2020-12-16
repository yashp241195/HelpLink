import React,{ useState } from 'react'
import Modal from '@material-ui/core/Modal'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import ClearIcon from '@material-ui/icons/Clear';



const Home = () => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const signUpBody = (
        <Paper elevation={3}>
            <div style={{
                background:'#fff', 
                margin:0, position:'absolute', 
                top:'10%', left:'30%',right:'30%'
                ,bottom:'10%' 
            }} >
                <div style={{display:'flex'}} >
                    <div style={{flexGrow:1}} />
                    <div>
                        <Button onClick={handleClose}> 
                            <ClearIcon />
                        </Button>
                    </div>
                </div>
                <center>
                    <h2>Sign Up</h2>
                    <form  noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <br/>
                    <br/>
                    <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
                    <br/>
                    <br/>
                    <Button style={{textTransform: 'none'}} variant="outlined" color="primary"> Sign up </Button>
                    <br/>
                    <br/>
                     or
                    <br/>
                    <br/>
                    <Button style={{textTransform: 'none'}} variant="outlined" color="primary"> Sign up with Google </Button>
                    </form>
                </center>
            </div>
        </Paper>
    );
    

    return (
        <div style={{
            height:'460px',
        }} >
            <center>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {signUpBody}
                </Modal>
                <Button style={{marginTop:'300px'}} onClick={handleOpen} variant="outlined" color="secondary">Create new account</Button>                
            </center>
        </div>
    )
}

export default Home