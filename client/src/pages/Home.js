import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';

import Filter from "../components/Filter";
import CustomPagination from "../components/ui/Pagination"
import HalfOffItemContainer from "../components/HalfOffItemContainer"

import halfOffItemService from "../api/halfOffItem/halfOffItem.svc";

const FilterWrapper = styled(Grid)({
    marginTop: '30px'
});

const PaginationWrapper = styled(Grid)({
    marginTop: '30px',
    marginBottom: '30px'
});

const ContainerWrapper = styled(Container)({
    background: '#fafafa'
})

export default function Home() {

    const [itemList, setItemList] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        async function getData() {
            let apiData = await halfOffItemService.getHalfOffItems(pageNo);
            setItemList(apiData.itemList);
            setTotalPages(apiData.totalPages);
        }
        getData();
    }, [pageNo])

    let getSelectedFilter = (filter) => {
        console.log(filter);
    }

    let pageHandler = (e, pageNo) => {
        setPageNo(pageNo)
    }

    return (
        <ContainerWrapper>
            <Grid container >
                <FilterWrapper item xs={12}>
                    <Filter filterHandler={getSelectedFilter} />
                </FilterWrapper>
                <Grid item xs={12}>
                    <HalfOffItemContainer itemList={itemList} />
                </Grid>
                <PaginationWrapper item xs={12}>
                    <CustomPagination
                        pageHandler={pageHandler}
                        pageCount={totalPages} />
                </PaginationWrapper>
            </Grid>
        </ContainerWrapper>
    )
} 
