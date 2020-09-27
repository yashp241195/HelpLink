import React from 'react'
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import MoreInfo from './MoreInfo'

const ProfileInfo = () => {
    return (
        <div style={{textAlign:"left",padding:10}}>
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
                        
        </div>
    )
}

export default ProfileInfo
