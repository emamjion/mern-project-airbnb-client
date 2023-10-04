import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Home/Navbar/Navbar';
import Footer from '../../Pages/Home/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;