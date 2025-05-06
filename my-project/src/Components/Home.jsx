import React from 'react';
import Banner from './Banner';
import Heading from './Heading';
import { Outlet, useLoaderData } from 'react-router-dom';
import Categories from './Categories';

const Home = () => {

    const categories=useLoaderData();
    console.log(categories)

    return (
        <div className='mb-6 mx-10'>
            <div className='my-6 mx-10'>
                <Banner></Banner>
            </div>

            <div className='mb-3'>
            <Heading 
            title={'Browse Coffees By Category'}
            subTitle={"Choose your desired coffee category though specific coffes that feet in your test"}
            ></Heading>
            </div>

            {/* Category section start here */}
            <Categories categories={categories}></Categories>

            <Outlet></Outlet>

        </div>
    );
};

export default Home;