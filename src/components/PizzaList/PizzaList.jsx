import React from 'react';
import PizzaItem from '../PizzaItem/PizzaItem.jsx';
import { useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function PizzaList() {

    const pizzas = useSelector(store => store.pizzas);

    return (
        <Container maxWidth='xl'>
            <Grid container spacing={0} justifyContent='center'>
                    {pizzas.map((pizza, i) => {
                        return <PizzaItem
                            key={i}
                            pizza={pizza}
                        />;
                    })}
            </Grid>
        </Container>
    )
}

export default PizzaList;