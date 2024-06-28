import React, { useState } from 'react';
import { createOrder } from '../services/api';
import CreateOrderForm from '../components/CreateOrderForm/CreateOrderForm';

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
            alert('Order created successfully');
        } catch (error) {
            alert('Failed to create order');
        }
    };

    // return (
    //     <div> 
    //         <h1>Create Order</h1>
    //         <form onSubmit={handleSubmit}>
    //             <div>
    //                 <label>Sender City:</label>
    //                 <input type="text" name="senderCity" value={orderData.senderCity} onChange={handleChange} />
    //             </div>
    //             <div>
    //                 <label>Sender Address:</label>
    //                 <input type="text" name="senderAddress" value={orderData.senderAddress} onChange={handleChange} />
    //             </div>
    //             <div>
    //                 <label>Recipient City:</label>
    //                 <input type="text" name="recipientCity" value={orderData.recipientCity} onChange={handleChange} />
    //             </div>
    //             <div>
    //                 <label>Recipient Address:</label>
    //                 <input type="text" name="recipientAddress" value={orderData.recipientAddress} onChange={handleChange} />
    //             </div>
    //             <div>
    //                 <label>Weight:</label>
    //                 <input type="number" name="weight" value={orderData.weight} onChange={handleChange} />
    //             </div>
    //             <div>
    //                 <label>Pickup Date:</label>
    //                 <input type="date" name="pickupDate" value={orderData.pickupDate} onChange={handleChange} />
    //             </div>
    //             <button type="submit">Create Order</button>
    //         </form>
    //     </div>
    // );
    console.log(orderData);
    return (
      <div>
        <CreateOrderForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          orderData={orderData}
        />
      </div>
    );

};

export default CreateOrder;
