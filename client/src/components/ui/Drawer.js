import React, { useState } from "react";
import clsx from 'clsx';
import { Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from '@material-ui/core/Divider';
import StorefrontIcon from '@material-ui/icons/MoveToInbox';
import ShoppingCartIcon from '@material-ui/icons/Mail';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import MyAppBar from "./AppBar";
import ListMenuItem from "./ListMenuItem"

import Home from "../../pages/Home";
import MyCollection from "../../pages/MyCollection";
import ShoppingList from "../../pages/ShoppingList";

const drawerWidth = 340;

const styles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    drawerPaper: {
        position: "relative",
        width: drawerWidth
    },
    toolbarMargin: theme.mixins.toolbar,
}));

function AppBarInteraction({ variant }) {
    const [drawer, setDrawer] = useState(false);
    const [title, setTitle] = useState("Home");
    const classes = styles();
    const toggleDrawer = () => {
        setDrawer(!drawer);
    };

    const onItemClick = title => () => {
        setTitle(title);
        setDrawer(variant === "temporary" ? false : drawer);
        setDrawer(!drawer);
    };

    return (
        <div className={classes.root}>
            <MyAppBar title={title} onMenuClick={toggleDrawer} />
            <Drawer
                variant={variant}
                open={drawer}
                onClose={toggleDrawer}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div
                    className={clsx({
                        [classes.toolbarMargin]: variant === "persistent"
                    })}
                />
                <List>
                    <ListMenuItem
                        label="Half Off Items"
                        titleName="Half Off Items"
                        to="/"
                        onItemClick={onItemClick}
                        icon={StorefrontIcon}
                    />
                </List>
                <Divider />
                <List>
                    <ListMenuItem
                        label="My Shopping list"
                        titleName="My Shopping list"
                        to="/shopping-list"
                        onItemClick={onItemClick}
                        icon={ShoppingCartIcon}
                    />
                    <ListMenuItem
                        label="My Collection"
                        titleName="My Collection"
                        to="my-collection"
                        onItemClick={onItemClick}
                        icon={FavoriteBorderIcon}
                    />
                </List>
            </Drawer>
            <main>
                <Route exact path="/" component={Home} />
                <Route path="/shopping-list" component={ShoppingList} />
                <Route path="/my-collection" component={MyCollection} />
            </main>
        </div>
    );
}

export default AppBarInteraction;
