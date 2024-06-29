import React from 'react';
import { Button, Typography, Paper, Card, CardContent, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './OrderDetails.css';

const OrderDetails = ({ order }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); 
    };

    if (!order) {
        return (
            <div className="order-details">
                <Paper className="order-details-paper">
                    <Typography variant="h6">Order not found.</Typography>
                    <Button variant="contained" color="primary" onClick={handleBackClick}>
                        Назад
                    </Button>
                </Paper>
            </div>
        );
    }

    return (
        <div className="order-details">
            <Card className="order-details-card">
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Детали заказа #{order.serialNumber}
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
                <CardActions className="card-actions-center">
                    <Button variant="contained" color="primary" onClick={handleBackClick}>
                        Назад
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default OrderDetails;
