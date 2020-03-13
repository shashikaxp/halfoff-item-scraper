import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

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
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  },
  logoutButton: {
    backgroundColor: "#ffffff",
    color: theme.palette.primary.variant,
    "&:hover": {
      backgroundColor: theme.palette.primary.variant,
      color: "#ffffff"
    }
  }
}));

export default function MyAppBar({ title, onMenuClick }) {
  const history = useHistory();
  const logout = () => {
    history.push("/login");
  };

  const classes = styles();
  return (
    <>
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
          <Button
            variant="contained"
            className={classes.logoutButton}
            onClick={logout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </>
  );
}
