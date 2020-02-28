import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';

export default function CustomPagination({ pageHandler, pageCount }) {
    return (
        <Grid container direction="row"
            justify="center"
            alignItems="center">
            <Pagination count={pageCount} color="secondary" onChange={pageHandler} />
        </Grid>
    )
}
