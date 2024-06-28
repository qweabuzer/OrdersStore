import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateOrder from './pages/CreateOrder';
import OrderList from './pages/OrderList';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-order" element={<CreateOrder />} />
                    <Route path="/order-list" element={<OrderList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
