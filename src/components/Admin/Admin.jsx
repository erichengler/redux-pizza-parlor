import {useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';

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
        <>
            Order List:
            <ul>
                {
                    orders.map((order) => (
                        <li key={order.id}>
                            {order.customer_name} - {order.time} - {order.total}
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default Admin;