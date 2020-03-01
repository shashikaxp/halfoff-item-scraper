import React from 'react'

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

export default function SnackBar({ open, type, message, handleClose }) {

    return (
        <div >
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                direction="down"
                open={open}
                autoHideDuration={2500}
                onClose={handleClose}
            >
                <MuiAlert onClose={handleClose} variant="filled" severity={type}>
                    {message}
                </MuiAlert>
            </Snackbar>

        </div >
    );

}
