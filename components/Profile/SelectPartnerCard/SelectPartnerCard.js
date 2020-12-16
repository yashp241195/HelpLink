import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Test from './Test';
import Chip from '@material-ui/core/Chip';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import StarsIcon from '@material-ui/icons/Stars';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CancelIcon from '@material-ui/icons/Cancel';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const useStyles = makeStyles({
    root: {
      maxWidth: 350,
    },
  });

const SelectPartnerCard = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [liked, setLiked] = useState(false);
    const [superlike, setSuperlike] = useState(false);
    const [disliked, setDisliked] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    return (
        <>
            <Card  className={classes.root} >
                <Test  />                
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Katrina Kaif, 37
                </Typography>
                <Typography gutterBottom variant="body1" component="h2">
                   <div style={{display:"flex",flexDirection:"row"}}>
                    <LocationOnOutlinedIcon size="small"/> Delhi (16 km away)
                    </div>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Katrina Kaif is an English actress who works in Hindi films. 
                Born in Hong Kong, Kaif and her family lived in several countries before she moved to London.  
                </Typography>
                <Typography gutterBottom variant="body1" component="h2">
                    <div style={{display:"flex",flexDirection:"row"}}>
                        <ThumbUpOutlinedIcon size="small"/> 
                        <span style={{marginLeft:5}}>Top Interests</span>
                    </div>
                   
                </Typography>
                <Typography gutterBottom variant="subtitle1" component="h2">
                    <Chip variant="outlined" size="small" label="Acting" />
                    <Chip variant="outlined" size="small" label="Beauty" />
                    <Chip variant="outlined" size="small" label="Makeup" />
                    <Chip variant="outlined" size="small" label="Dance" />
                </Typography>
                
                </CardContent>
            <CardActions>
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
                
                <Button
                // variant=""
                onClick={handleExpandClick}
                size="small" color="primary">
                More info
                </Button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography paragraph>Method:</Typography>
                <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                    minutes.
                </Typography>
                <Typography paragraph>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                    heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                    and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                    saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                </Typography>
                <Typography paragraph>
                    Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                    without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                    medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                    again without stirring, until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don’t open.)
                </Typography>
                <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and then serve.
                </Typography>
                </CardContent>
            </Collapse>
        </Card>
        </>
    )
}

export default SelectPartnerCard
