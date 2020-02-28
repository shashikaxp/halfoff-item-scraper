import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';

import Filter from "../components/Filter";
import CustomPagination from "../components/ui/Pagination"
import HalfOffItemContainer from "../components/HalfOffItemContainer"

const FilterWrapper = styled(Grid)({
    marginTop: '30px'
});

export default function Home() {

    let getSelectedFilter = (filter) => {
        console.log(filter);
    }

    let pageHandler = (e, pageNo) => {
        console.log(pageNo);
    }

    return (
        <Container>
            <Grid container >
                <FilterWrapper item xs={12}>
                    <Filter filterHandler={getSelectedFilter} />
                </FilterWrapper>
                <Grid Item xs={12}>
                <HalfOffItemContainer />
                </Grid>
                <FilterWrapper item xs={12}>
                    <CustomPagination
                        pageHandler={pageHandler}
                        pageCount={12} />
                </FilterWrapper>
            </Grid>
        </Container>
    )
} 
