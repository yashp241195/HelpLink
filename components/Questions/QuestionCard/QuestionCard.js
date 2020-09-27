import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop:50,
    alignContent:"centre",
    maxWidth: 600,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    // transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function QuestionCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            Y
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Yash Pratap"
        subheader="September 28, 2020"
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <CardContent>
      <Typography variant="h6" component="h2">
        How relationship changes in different phases of life ?
        <br/>
        <Chip variant="outlined" size="small" label="Relationships" />
          <Chip variant="outlined" size="small" label="different stages of relationship" />
          <Chip variant="outlined" size="small" label="love" />

        <br/>
      </Typography>
        <Typography style={{height:'100%', marginTop:10, overflow:"hidden"}} variant="body2"  component="p" paragraph textOverflow="ellipsis" gutterBottom>
          
          Every stage love has it’s own beauty and dynamics but the feeling of love/involvement remains the same. You can’t expect same things from each stage because people value different things at different stages of life.
          <br/>
          
          

          <br/>
          Teenage : Don’t take it seriously at all because your brain isn’t capable to select life partner and your ability to handle emotion is very low. It is solely based on attraction because personalities aren’t developed yet.
          <br/><br/>
          Early 20’s : Don’t push your limits for anyone because it the most critical time for your personal growth. Your only objective to get into relationship is to know yourself better first and only commit to serious relationship if you are very sure about your preferences. Don’t feel bad if your relationship doesn’t workout as very few relationships survive this stage because both are evolved in different personalities who are really tough to stick together.
          <br/><br/>
          You can love tiger but you can’t spend the rest of your life with a tiger. Even if you manage to stay with tiger by maintaining too much discipline, you will miss out the other dimensions in life and humans suffers limitations immensely. I am using tiger metaphorically but humans are not tree or any tiger they can change and become more wise. To maintain the relationship you need to invest 2 or 3 times time, energy and efforts to make it work till both gain enough wisdom to handle each other but still it will be more tough to find time for other things. You life will revolve around maintaining the relationship but if it the the most valuable thing in your life you must protect it because there is no rule book for life.

          No rule book doesn’t mean you can do whatever you want in your life and you don’t need to face it’s consequences of your decision. You need to prepare yourself for the consequences but trust me if you sacrifice few years to build your life it will worth it but don’t confuse that you have the strongest relationship bond because you made lots of sacrifice, other people had similar bond as you with lesser efforts. Remember, comparison is the thief of joy.

          I don't see many people complaining not able to explore chemistry, ice hockey etc etc in life or it is not necessary to try everything in life because life is very short to do that and if you remove few things or limit your expectations you can live with your tiger peacefully.
          <br/><br/>
          Adult : This is the time to make some efforts to find the life partner. If your casual relationship works fine than you can go with it otherwise you need to find the new one. Don’t expect the same story of early 20's in adult life because both people are evolved enough which means nobody is going to do too much stupidity to impress each other. It doesn’t mean people stop caring for each other but it means old rules doesn’t work anymore.


        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        <IconButton aria-label="add to favorites">
          {(1)?<FavoriteBorderIcon/>:<FavoriteIcon />}
        </IconButton>
        <IconButton
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ChatBubbleOutlineIcon />
        </IconButton>
        <IconButton style={{marginLeft:"auto"}}aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
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
  );
}
