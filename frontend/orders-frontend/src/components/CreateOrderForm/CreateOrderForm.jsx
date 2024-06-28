import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import './form.css';

const CreateOrderForm = ({ handleSubmit, handleChange, orderData }) => {
    return (
        <form className="formStyles" onSubmit={handleSubmit}>
            <TextField
                required
                id="senderCity"
                name="senderCity" 
                label="Sender City"
                value={orderData.senderCity}
                onChange={handleChange}
                margin="dense"
                className="address"
            />
            <TextField
                required
                id="senderAddress"
                name="senderAddress" 
                label="Sender Address"
                value={orderData.senderAddress}
                onChange={handleChange}
                margin="dense"
                className="address"
            />
            <TextField
                required
                id="recipientCity"
                name="recipientCity" 
                label="Recipient City"
                value={orderData.recipientCity}
                onChange={handleChange}
                margin="dense"
                className="address"
            />
            <TextField
                required
                id="recipientAddress"
                name="recipientAddress" 
                label="Recipient Address"
                value={orderData.recipientAddress}
                onChange={handleChange}
                margin="dense"
                className="address"
            />
            <TextField
                required
                id="weight"
                name="weight" 
                label="Weight"
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
                label="Pickup Date"
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
                Submit
            </Button>
        </form>
    );
};

export default CreateOrderForm;
