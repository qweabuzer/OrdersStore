import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Card, CardContent, Grid} from '@mui/material';
import './OrderList.css';

const Orders = ({ orders }) => {
    const navigate = useNavigate();

    const handleOrderClick = (id) => {
        navigate(`/order/${id}`);
    };

    return (
        <Container className="root">
            <Grid container spacing={3}>
                {orders.map(order => (
                    <Grid item xs={12} sm={6} md={4} key={order.id}>
                        <Card className="orderCard" onClick={() => handleOrderClick(order.id)}>
                            <CardContent>
                                <Typography variant="h6" className="serialNumber">
                                    Заказ #{order.serialNumber}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Город отправителя:</strong> {order.senderCity}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Адрес отправителя:</strong> {order.senderAddress}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Город получателя:</strong> {order.recipientCity}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Адрес получателя:</strong> {order.recipientAddress}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Вес груза:</strong> {order.weight} kg
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Дата забора груза:</strong> {new Date(order.pickupDate).toLocaleDateString()}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Orders;
