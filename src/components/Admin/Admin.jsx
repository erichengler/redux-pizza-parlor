import { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
import './Admin.css';
// MUI Imports
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Grid } from '@mui/material';

function Admin() {

    let [orders, setOrders] = useState([]);

    const fetchOrders = () => {
        axios.get('/api/order').then((response) => {
            setOrders(response.data);
        }).catch((error) => {
            console.log(`Error in fetchPizzas: ${error}`);
            alert(`It'sa no bueno!`);
        })
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <div className="orderList">
            <h2>Order List</h2>
            <Grid container direction="column" alignItems="center">
            <Table sx={{ maxWidth: 700 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Customer Name</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        orders.map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>{order.customer_name}</TableCell>
                                <TableCell align="right">{order.type}</TableCell>
                                <TableCell align="right">
                                    {(order.time).substring(5, 10)}<br />
                                    {(order.time).substring(11, 16)}
                                </TableCell>
                                <TableCell align="right">{order.total}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            <br /><br />
            <p>App created by:
                <br /><br />
                <a href="https://github.com/erichengler">Erich Engler</a>, 
                <a href="https://github.com/ggsushi"> Glonel Dimapilis</a> and
                <a href="https://github.com/jengler22"> Jakob Engler</a>
            </p>
            </Grid>
        </div>
    )
}

export default Admin;