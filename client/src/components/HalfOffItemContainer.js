import React from 'react'
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import HalfOffItem from "./HalfOffItem";

const ItemWrapper = styled(Grid)({
    padding: '20px 20px',
});

const itemData = {
    "_id": '5e579c42745bd367443eb44b',
    "value": {
        "cents": 50,
        "dollar": 5
    },
    "image": "https://cdn0.woolworths.media/content/wowproductimages/medium/641523.jpg",
    "status": "in stock",
    "name": "Vege Chips Deli Crisps Original 100g",
    "__v": 0
};

export default function HalfOffItemContainer() {
    return (
        <Grid container>
            <ItemWrapper item xs={6} sm={3}  >
                <HalfOffItem itemDetails={itemData} />
            </ItemWrapper>
            <ItemWrapper item xs={6} sm={3}  >
                <HalfOffItem itemDetails={itemData} />
            </ItemWrapper>
            <ItemWrapper item xs={6} sm={3}  >
                <HalfOffItem itemDetails={itemData} />
            </ItemWrapper>
            <ItemWrapper item xs={6} sm={3}  >
                <HalfOffItem itemDetails={itemData} />
            </ItemWrapper>
            <ItemWrapper item xs={6} sm={3}  >
                <HalfOffItem itemDetails={itemData} />
            </ItemWrapper>
            <ItemWrapper item xs={6} sm={3}  >
                <HalfOffItem itemDetails={itemData} />
            </ItemWrapper>
        </Grid>

    )
}
