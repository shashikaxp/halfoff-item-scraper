import React from 'react'
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from '@material-ui/core/ListItemIcon';

export default function ListMenuItem({ label, titleName, to, onItemClick, icon }) {
    const ItemIcon = icon;
    return (
        <React.Fragment>
            <ListItem onClick={onItemClick(titleName)} button component={Link} to={to}>
                <ListItemIcon>
                    <ItemIcon />
                </ListItemIcon>
                <ListItemText primary={label} />
            </ListItem>
        </React.Fragment>
    )
}
