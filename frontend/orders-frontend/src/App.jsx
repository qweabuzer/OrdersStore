import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import CreateOrder from './pages/CreateOrder';
import OrderList from './pages/OrderList';
import OrderDetailsPage from './pages/OrderDetailsPage';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-order" element={<CreateOrder />} />
                    <Route path="/order-list" element={<OrderList />} />
                    <Route path="/order/:id" element={<OrderDetailsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
