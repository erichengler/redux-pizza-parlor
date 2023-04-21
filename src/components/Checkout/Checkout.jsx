import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import ProgressBar from "../ProgressBar/ProgressBar";
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Checkout() {
    const dispatch = useDispatch();
    // customerInfo will be displayed top left
    const customerInfo = useSelector(store => store.customerInfo);
    const history = useHistory();

    useEffect(() => {
        fetchCustomerInfo
    }, []);

    const personName = useSelector(store => store.personName);
    const streetAddress = useSelector(store => store.streetAddress);
    const city = useSelector(store => store.city);
    const zip = useSelector(store => store.zip)
    const orderType = useSelector(store => store.orderType);
    const cartTotal = useSelector(store => store.cartTotal);
    const cart = useSelector(store => store.cart)


    const sendToServer = () => {
        axios.post('/api/order', {
            customer_name: personName,
            street_address: streetAddress,
            city: city,
            zip: zip,
            type: orderType,
            total: cartTotal,
            pizzas: cart
        }).then(response => {
            dispatch({ type: 'CLEAR_FORM' });
            dispatch({ type: 'CLEAR_CART' });
            dispatch({ type: 'CLEAR_CART_TOTAL' });
            history.push('/')
            console.log(personName, streetAddress, city, zip, orderType, cartTotal)
        }).catch(error => {
            alert('Something went wrong!');
            console.log(error);
        });


    }


    const fetchCustomerInfo = () => {
        axios.get('/api/order').then(response => {
            //SET_CUSTOMER_INFO   '/api/order'
            dispatch({ type: 'SET_CUSTOMER_INFO', payload: response.data });

        }).catch(error => {
            alert('something went wrong')
        });
    }


    return (
        <>
            <ProgressBar currentStep={2} />
            <Grid container direction="column" alignItems="center">
                <Card sx={{
                    paddingTop: '15px',
                    paddingBottom: '15px',
                    width: '400px',
                    textAlign: 'center'
                }}>
                    <Typography>
                        <h2>Order Review</h2>
                        {
                            cart.map(item => (
                                <div key={item.id}>
                                    {item.name} - ${item.price}
                                </div>
                            ))
                        }
                    </Typography>
                    <br />
                    <Typography>
                    <h2>Customer Info</h2>
                    <div>
                        <p>
                            {personName} <br />
                            {streetAddress} <br />
                            {city}, {zip} <br />
                            Type: {orderType} <br />
                            Total: ${cartTotal.toFixed(2)}
                        </p>
                        <br />
                        <Button 
                            variant="outlined" 
                            onClick={sendToServer}>
                                Checkout
                        </Button>
                        <br /><br />
                    </div>
                    </Typography>
                </Card>
            </Grid>
        </>
    )
}


export default Checkout;