import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../services/api';
import Orders from '../components/OrderList/Orders';
import { Container, Typography, Box, Button} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OrderList = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/');
    };


    useEffect(() => {
        const getOrders = async () => {
            const ordersData = await fetchOrders();
            console.log('Fetched Orders:', ordersData); // Добавить это
            setOrders(ordersData);
        };

        getOrders();
    }, []);

    return (
        <Container>
        <Box display="flex" justifyContent="center" mt={4} mb={2}>
            <Typography variant="h4" gutterBottom>
                Список заказов
            </Typography>
        </Box>
        <Box display="flex" justifyContent="center" mb={4}>
            <Button variant="contained" color="primary" onClick={handleBackClick}>
                Назад
            </Button>
        </Box>
        <Orders orders={orders} />
    </Container>
);
};

export default OrderList;
