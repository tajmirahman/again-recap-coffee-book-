import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ cat }) => {
    console.log(cat);
    return (
        <div className="card bg-base-100  shadow-sm border-2 border-black mt-4">
            <figure className='w-full h-[300px]'>
                <img
                    className='w-full h-[300px] object-cover'
                    src={cat?.image}
                    alt="Shoes" />
            </figure>
            <div className="ml-4 mt-2">
                <h2 className="text-xl">Name: {cat?.name}</h2>
                <p>Types: {cat?.type}</p>
                <p>Category: {cat?.category}</p>
                <p>Origin: {cat?.origin}</p>
                <p>Rating: {cat?.rating}</p>
                <p>Popularity: {cat?.popularity}</p>
            </div>

            <div className="flex justify-end p-4">
                <Link to={`/coffee/${cat?.id}`}> <button className="btn btn-warning">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Card;