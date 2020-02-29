import React from 'react'
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import HalfOffItem from "./HalfOffItem";

const ItemWrapper = styled(Grid)({
    padding: '20px 20px',
});

export default function HalfOffItemContainer({ itemList }) {
    return (
        <Grid container>
            {itemList.map(item => {
                return (
                    <ItemWrapper item xs={6} sm={3} key={item.name} >
                        <HalfOffItem itemDetails={item} />
                    </ItemWrapper>
                )
            })}
        </Grid>

    )
}
