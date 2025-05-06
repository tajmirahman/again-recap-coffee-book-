import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card';

const AllCoffee = () => {

    const data = useLoaderData();

    const [coffee, setCoffee] = useState(data);

    const handleSort = (sortBy) => {
        if (sortBy == 'rating') {
            const sortByRating = [...data].sort((a, b) => b.rating - a.rating);
            setCoffee(sortByRating)
        }
        else if (sortBy == 'popularity') {
            const sortByPopularity = [...data].sort((a, b) => a.popularity - b.popularity);
            setCoffee(sortByPopularity)
        }


    }

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">Sort Coffee&apos;s by Popularity & Rating&gt; </h1>

                <div className="space-x-3 mt-4">
                    <button onClick={() => handleSort('rating')} className="btn btn-warning">Sort By Rating</button>
                    <button onClick={() => handleSort('popularity')} className="btn btn-warning">Sort By Popularity</button>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                {
                    coffee.map(coffee => <Card cat={coffee}></Card>)
                }
            </div>
        </>
    );
};

export default AllCoffee;