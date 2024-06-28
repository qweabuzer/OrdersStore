import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Orders Management</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/create-order">Create Order</Link>
                    </li>
                    <li>
                        <Link to="/order-list">Order List</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
