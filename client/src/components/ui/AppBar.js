import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    toolbarMargin: theme.mixins.toolbar,
    aboveDrawer: {
        background: theme.palette.primary.main,
        zIndex: theme.zIndex.drawer + 1
    }
}));

export default function MyAppBar({ title, onMenuClick }) {
    const classes = styles();
    return (
        <React.Fragment>
            <AppBar className={classes.aboveDrawer}>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        onClick={onMenuClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.flex}>
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}

