import '../css/App.css';
import React from 'react';

// Rest of your code here

import Header from '../components/Header';
import Menu from '../components/Menu';
import Dashboard from '../components/Dashboard';
import Footer from '../components/Footer';

function Home() {
    return (
        <div class="wrapper">
            <Header />
            <Menu />
            <Dashboard />
            <Footer />
        </div>
    );
}

export default Home;