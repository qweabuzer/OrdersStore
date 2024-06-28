import axios from 'axios';

const API_BASE_URL = 'https://localhost:7295';

// Fetch all orders
export const fetchOrders = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/Orders/GetAll`);
        return response.data;
    } catch (error) {
        console.error('Ошибка при загрузке заказов', error);
        return [];
    }
};

// Create a new order
export const createOrder = async (order) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/Orders/Create`, order);
        return response.data;
    } catch (error) {
        console.error('Ошибка при создании заказа', error);
        throw error;
    }
};