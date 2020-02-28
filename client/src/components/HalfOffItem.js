import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    none: {
        display: 'none'
    },
});

export default function HalfOffItem({ itemDetails }) {

    let { name, value, image, status } = itemDetails
    const classes = useStyles();
    let badgeContent = 0;

    if (status !== 'in stock') {
        badgeContent = "Not in stock";
    }

    return (
        <Badge badgeContent={badgeContent} color="error" >
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="auto"
                        width="200px"
                        image={image}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="subtitle1">
                            {name}
                        </Typography>
                        <Typography component="div" >
                            <Box fontWeight="fontWeightBold" fontSize={25} color="textSecondary" textAlign="right" > ${value.dollar}.{value.cents}</Box>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Badge >
    )
}
