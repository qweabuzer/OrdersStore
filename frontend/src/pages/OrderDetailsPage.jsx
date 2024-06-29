// src/pages/OrderDetailsPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOrderById } from '../services/api';
import OrderDetails from '../components/OrderDetails/OrderDetails';

const OrderDetailsPage = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getOrder = async () => {
            try {
                const orderData = await fetchOrderById(id);
                setOrder(orderData);
            } catch (error) {
                setError(error);
            }
        };

        getOrder();
    }, [id]);

    if (error) {
        return <div>Error fetching order: {error.message}</div>;
    }

    return (
        <div>
            {order ? <OrderDetails order={order} /> : <div>Loading...</div>}
        </div>
    );
};

export default OrderDetailsPage;
