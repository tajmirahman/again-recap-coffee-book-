import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCard = () => {

    const data = useLoaderData();

    const { category } = useParams();
    const [coffee, setCoffee]=useState([]);

    useEffect(()=>{
        if(category){
            const filterByCoffee= [...data].filter(d=> d.category === category);
        setCoffee(filterByCoffee)
        }
        else{
            setCoffee(data)
        }
    },[category, data])

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            {
                coffee.map(cat => <Card cat={cat}></Card>)
            }
        </div>
    );
};

export default CoffeeCard;