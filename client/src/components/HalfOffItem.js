import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    none: {
        display: 'none'
    },
    mediaImage: {
        objectFit: 'scale-down'
    },
    productName: {
        fontSize: '1rem',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        marginBottom: '20px',
        minHeight: '70px'
    },
    mediaWrapper: {
        margin: '15px 15px'
    }
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
                    <div className={classes.mediaWrapper}>
                        <CardMedia
                            component="img"
                            className={classes.mediaImage}
                            height="200px"
                            width="auto"
                            image={image}
                            title="Contemplative Reptile"
                        />
                    </div>
                    <CardContent>
                        <p className={classes.productName}>
                            {name}
                        </p>
                        <Typography component="div" >
                            <Box fontWeight="fontWeightBold" fontSize={25} color="textSecondary" textAlign="right" > ${value.dollar}.{value.cents}</Box>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Badge >
    )
}
