import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import './CustomerForm.css'
import ProgressBar from "../ProgressBar/ProgressBar";
import TextField from '@mui/material/TextField';
import { FormLabel } from '@mui/material';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function CustomerForm() {

    const history = useHistory();
    const dispatch = useDispatch();
    const orderType = useSelector(store => store.orderType);

    // Set order type
    const setOrderType = (event) => {
        const action = { type: 'SET_ORDER_TYPE', payload: event.target.value }
        dispatch(action);
        console.log(event.target.value);
    }

    // ---------- Start handle on change ----------
    const handleChangeName = (event) => {
        const action = { type: 'SET_PERSON_NAME', payload: event.target.value }
        dispatch(action);
    }

    const handleChangeAddress = (event) => {
        const action = { type: 'SET_ADDRESS', payload: event.target.value }
        dispatch(action);
    }

    const handleChangeCity = (event) => {
        const action = { type: 'SET_CITY', payload: event.target.value }
        dispatch(action);
    }

    const handleChangeZip = (event) => {
        const action = { type: 'SET_ZIP', payload: event.target.value }
        dispatch(action);
    }
    // ---------- End handle on change ----------

    // To next page '/checkout'
    const nextPage = (event) => {
        event.preventDefault();
        history.push('/checkout');
    }

    return (
        <>
            <ProgressBar currentStep={1} />
            <Grid container direction="column" alignItems="center">
                <Card sx={{
                    paddingTop: '15px',
                    paddingBottom: '15px',
                    width: '400px',
                    textAlign: 'center'
                }}>
                    <h2>Customer Information</h2>
                        <br />
                    <form onSubmit={nextPage}>
                        <TextField onChange={handleChangeName}
                            size="small"
                            type="text"
                            placeholder="Name"
                            required />
                        <br /><br />
                        <TextField onChange={handleChangeAddress}
                            size="small"
                            type="text"
                            placeholder="Street Address"
                            required />
                        <br /><br />
                        <TextField onChange={handleChangeCity}
                            size="small" type="text"
                            placeholder="City"
                            required />
                        <br /><br />
                        <TextField onChange={handleChangeZip}
                            size="small"
                            type="text"
                            placeholder="Zip"
                            required />
                        <br /><br />
                        <FormLabel>
                            <input onClick={setOrderType}
                                type="radio"
                                name="orderType"
                                value="pickup"
                                required />
                            Pickup
                        </FormLabel>
                        <FormLabel>
                            <input onClick={setOrderType}
                                type="radio"
                                name="orderType"
                                value="delivery" />
                            Delivery
                        </FormLabel>
                        <br /><br />
                        <FormLabel>
                            <Button
                                variant="outlined"
                                type="submit"
                                onSubmit={nextPage}>
                                Submit
                            </Button>
                        </FormLabel>
                    </form>
                    <br />
                </Card>
            </Grid>

        </>
    )
}

export default CustomerForm;