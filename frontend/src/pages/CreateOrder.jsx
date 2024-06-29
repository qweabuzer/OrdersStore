import React, { useState } from 'react';
import { createOrder } from '../services/api';
import CreateOrderForm from '../components/CreateOrderForm/CreateOrderForm';
import { Container, Typography, Box } from '@mui/material';

const CreateOrder = () => {
    const [orderData, setOrderData] = useState({
        senderCity: '',
        senderAddress: '',
        recipientCity: '',
        recipientAddress: '',
        weight: '',
        pickupDate: new Date()
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
  
      if (name === 'pickupDate') {
          const dateValue = new Date(value);
          const dateString = dateValue.toISOString().substring(0, 10);
          setOrderData((prevData) => ({
              ...prevData,
              pickupDate: dateString
          }));
      } else {
          setOrderData((prevData) => ({ ...prevData, [name]: value }));
      }
  };
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createOrder(orderData);
            clearForm();
            alert('Заказ успешно создан!');
        } catch (error) {
            alert('Не удалось создать заказ');
        }
    };

    const clearForm = () => {
        setOrderData({
            senderCity: '',
            senderAddress: '',
            recipientCity: '',
            recipientAddress: '',
            weight: '',
            pickupDate: '',
        });
    };

    console.log(orderData);
    return (
        <Container>
            <Box display="flex" justifyContent="center" mt={4}
            marginTop={10}
            >
                <Typography variant="h4" gutterBottom>
                    Форма создания заказа
                </Typography>
            </Box>
            <CreateOrderForm
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                orderData={orderData}
            />
        </Container>
    );
};


export default CreateOrder;
