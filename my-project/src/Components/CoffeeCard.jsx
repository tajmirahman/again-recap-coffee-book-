import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCard = () => {

    const data = useLoaderData();
    console.log(data);

    const { category } = useParams();


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {
                data.map(cat => <Card cat={cat}></Card>)
            }
        </div>
    );
};

export default CoffeeCard;