import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import MainSlider from './MainSlider'
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import StarsIcon from '@material-ui/icons/Stars';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CancelIcon from '@material-ui/icons/Cancel';
import ProfileInfo from './ProfileInfo'
import MoreInfo from './MoreInfo'

const Test = () => {

    const [liked, setLiked] = useState(false);
    const [superlike, setSuperlike] = useState(false);
    const [disliked, setDisliked] = useState(false);


    return (
        <div>
           <Grid container spacing={3}>
                <Grid item xs={6}>
                   <Paper> 
                       <ProfileInfo />
                       <MoreInfo />  
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper >
                        <MainSlider />
                        <IconButton 
                        style={{color:"#f44336"}}
                        onClick={()=>{setLiked(!liked)}}
                        >
                        { (liked)?<FavoriteIcon/>:<FavoriteBorderOutlinedIcon/> } 
                        </IconButton>
                        <IconButton 
                        size="large"
                        style={{color:"blue"}}
                        onClick={()=>{setSuperlike(!superlike)}}
                        >
                            { (superlike)?<StarsIcon/>:<StarsOutlinedIcon/> } 
                        </IconButton>
                        <IconButton 
                        size="large"
                        style={{color:"black"}}
                        onClick={()=>{setDisliked(!disliked)}}
                        >
                            { (disliked)?<CancelIcon/>:<CancelOutlinedIcon/> } 
                        </IconButton>
                    </Paper>
                </Grid>                
            </Grid> 
        </div>
    )
}

export default Test
