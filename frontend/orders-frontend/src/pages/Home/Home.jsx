import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, Button } from '@mui/material';
import './Home.css'; 

const Home = () => {
    return (
        <Container className="root">
            <Typography variant="h2" gutterBottom>
                OrdersStore - @qweabuzer
            </Typography>
            <Typography variant="h6" gutterBottom>
                Web приложение для приемки заказов на доставку
            </Typography>
            <Box className="nav">
                <Button
                    component={Link}
                    to="/create-order"
                    variant="contained"
                    color="primary"
                    className="button"
                >
                    Создать заказ
                </Button>
                <Button
                    component={Link}
                    to="/order-list"
                    variant="contained"
                    color="secondary"
                    className="button"
                >
                    Список заказов
                </Button>
            </Box>
        </Container>
    );
};

export default Home;
