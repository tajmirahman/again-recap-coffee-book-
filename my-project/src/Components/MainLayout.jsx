import React from 'react';
import Header from './Header/Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Header></Header>

            {/* daynamic part */}
            <Outlet></Outlet>


            <Footer></Footer>
        </div>
    );
};

export default MainLayout;