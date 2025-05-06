import React from 'react';
import Banner from './Banner';
import Heading from './Heading';

const Home = () => {
    return (
        <div >
            <div className='my-6 mx-10'>
                <Banner></Banner>
            </div>

            <div className='mb-3'>
            <Heading 
            title={'Browse Coffees By Category'}
            subTitle={"Choose your desired coffee category though specific coffes that feet in your test"}
            ></Heading>
            </div>

        </div>
    );
};

export default Home;