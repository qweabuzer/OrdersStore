import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import { useNavigate  } from 'react-router-dom';
import './form.css';

const CreateOrderForm = ({ handleSubmit, handleChange, orderData }) => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <form className="formStyles" onSubmit={handleSubmit}>
            <TextField
                required
                id="senderCity"
                name="senderCity" 
                label="Город отправителя"
                value={orderData.senderCity}
                onChange={handleChange}
                margin="dense"
                className="address"
            />
            <TextField
                required
                id="senderAddress"
                name="senderAddress" 
                label="Адрес отправителя"
                value={orderData.senderAddress}
                onChange={handleChange}
                margin="dense"
                className="address"
            />
            <TextField
                required
                id="recipientCity"
                name="recipientCity" 
                label="Город получателя"
                value={orderData.recipientCity}
                onChange={handleChange}
                margin="dense"
                className="address"
            />
            <TextField
                required
                id="recipientAddress"
                name="recipientAddress" 
                label="Адрес получателя"
                value={orderData.recipientAddress}
                onChange={handleChange}
                margin="dense"
                className="address"
            />
            <TextField
                required
                id="weight"
                name="weight" 
                label="Вес груза"
                value={orderData.weight}
                onChange={handleChange}
                InputProps={{
                    startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                }}
                type="number"
                margin="dense"
                className="weight"
            />
            <TextField
                InputLabelProps={{ shrink: true }}
                required
                id="pickupDate"
                name="pickupDate" 
                label="Дата забора груза"
                value={orderData.pickupDate}
                onChange={handleChange}
                margin="dense"
                type="date"
                className="date"
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                margin="dense"
                className="button"
            >
                Создать
            </Button>
            <Button
            type='cancel'
            variant="outlined"
            color="error"
            margin="dense"
            onClick={handleCancel}
            >
                Отменить
            </Button>
        </form>
    );
};

export default CreateOrderForm;
