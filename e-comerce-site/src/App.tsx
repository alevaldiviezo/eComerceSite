// App.tsx
import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import './components/styles.css';

const App: React.FC = () => {
    return (
        <div>
            <Navbar />
            <Content />
            <Footer />
        </div>
    );
};

export default App;
