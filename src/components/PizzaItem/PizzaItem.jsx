import { useDispatch, useSelector } from 'react-redux';
// MUI Imports
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function PizzaItem({ pizza }) {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart);
    const cartTotal = useSelector(store => store.cartTotal);

    let totalPrice = 0;

    const addPizzaToCart = () => {
        const findTotal = () => {
            const action = { type: 'SET_CART_TOTAL', payload: totalPrice }
            dispatch(action);
        }

        console.log(pizza, `YO DIS DA CART`, cart);
        if (cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                console.log(`YO WE'RE LOOKING FOR IDs`, cart[i].id)
                if (pizza.id === cart[i].id) {
                    alert(`Please select only 1 of each picha.`);
                    return;
                }
            }
            dispatch({ type: 'ADD_TO_CART', payload: pizza });
            totalPrice += Number(pizza.price)
            pizza.quantity = 1
        } else {
            dispatch({ type: 'ADD_TO_CART', payload: pizza });
            totalPrice += Number(pizza.price)
            pizza.quantity = 1

        }

        findTotal();
        console.log(`ey yo, i'mma total cart total cart`, cartTotal)

    };



    return (
        <Grid sx={{ mx: '20px', my: '20px' }}>
            <Card sx={{
                width: 450, height: 400,
                display: 'flex',
                flexDirection: 'column'
            }}>
                <CardMedia
                    sx={{
                        height: 200,
                        margin: '10px',
                        borderRadius: '2%'
                    }}
                    image={pizza.image_path}
                />
                <CardContent sx={{ height: 100 }}>
                    <Typography sx={{ float: 'right' }}>
                        ${pizza.price}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div">
                        {pizza.name}
                    </Typography>
                    <Typography
                        variant="body"
                        color="text.secondary">
                        {pizza.description}
                    </Typography>
                    <br />
                </CardContent>
                <CardActions sx={{ justifyContent: 'right' }}>
                    <Button
                        onClick={addPizzaToCart}>
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
};

export default PizzaItem;