import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const FilterWrapper = styled(Paper)({
    padding: '20px 20px',
});

export default function Filter({ filterHandler }) {

    const [value, setValue] = useState('all');

    const handleChange = event => {
        setValue(event.target.value);
        filterHandler(event.target.value);
    };

    return (
        <Grid container direction="row"
            justify="center"
            alignItems="center">
            <FilterWrapper padding={7}>
                <FormControl>
                    <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
                        <FormControlLabel
                            value="all"
                            control={<Radio color="primary" />}
                            label="All"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="woolworths"
                            control={<Radio color="primary" />}
                            label="Woolworths"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="coles"
                            control={<Radio color="primary" />}
                            label="Coles"
                            labelPlacement="end"
                        />
                    </RadioGroup>
                </FormControl>
            </FilterWrapper>
        </Grid>
    )
}
