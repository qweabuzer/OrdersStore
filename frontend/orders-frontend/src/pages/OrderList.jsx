import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../services/api';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const ordersData = await fetchOrders();
            setOrders(ordersData);
        };

        getOrders();
    }, []);

    return (
        <div>
            <h1>Order List</h1>
            <ul>
                {orders.map(order => (
                    <li key={order.id}>{order.senderCity} - {order.recipientCity}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrderList;
