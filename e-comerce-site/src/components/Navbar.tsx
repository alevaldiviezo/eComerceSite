// Navbar.tsx
import React from 'react';
import './styles.css';

const Navbar: React.FC = () => {
    return (
        <nav>
            <h1>E-Comerce Deals</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;