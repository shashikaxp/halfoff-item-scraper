import React from 'react'
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import HalfOffItem from "./HalfOffItem";

const ItemWrapper = styled(Grid)({
    padding: '20px 20px',
});

const ContainerWrapper = styled(Grid)({
    display: 'flex'
});

export default function HalfOffItemContainer({ itemList }) {
    return (
        <ContainerWrapper container direction="row" alignItems="stretch" justify="flex-start">
            {itemList.map(item => {
                return (
                    <ItemWrapper item xs={6} sm={3} key={item.name} >
                        <HalfOffItem itemDetails={item} />
                    </ItemWrapper>
                )
            })}
        </ContainerWrapper>

    )
}
