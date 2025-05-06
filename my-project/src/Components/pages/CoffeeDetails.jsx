import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CoffeeDetails = () => {

    const data = useLoaderData();
    console.log(data)
    const { id } = useParams();

    const [coffee, setCoffee] = useState({});

    useEffect(() => {
       const findData=data.find(d=> d.id == id);
       setCoffee(findData)
    }, [data, id]);

    console.log(coffee)

    const { making_process, name, ingredients, nutrition_info, origin } = coffee;



    return (
        <div className="w-11/12 mx-auto space-y-4 py-6">
            <div className="w-full h-[600px] object-cover ">
                <img className="w-[80%] h-[400px]  rounded-lg" src={coffee.image} alt="" />
            </div>
            <div className="flex justify-end">
                <button className="btn btn-warning">Add Favorite</button>
            </div>
            <h1 className="lg:text-2xl ">Making Procedure- {coffee.description}</h1>
            <div className="">
                <p>Name: {name}</p>
                <p>Making: {making_process}</p>
                <p>Origin: {origin}</p>
            </div>
            <div className="space-y-2">
                <h1 className="text-2xl underline">Ingredients</h1>
                <ul>
                    {
                        ingredients && ingredients.map((ing, i) => <li key={i}>{ing}</li>)

                    }
                </ul>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex-1 space-y-2 ">
                    <h1 className="text-2xl underline">Nutrition Info</h1>
                    <ul className="text-xl">
                        {
                            nutrition_info && Object.keys(nutrition_info).map((n, i) => <li className="list-disk" key={i}>
                                {n}: {nutrition_info[n]}
                            </li>)
                        }
                    </ul>
                </div>
                {/* <div className="flex-1 object-cover">
                    <img className="w-[500px] rounded-lg" src={imgNu} alt="" />
                </div> */}

            </div>
        </div>
    );
};

export default CoffeeDetails;