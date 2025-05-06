import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Categories = ({ categories }) => {

    const {category}=useParams()
 

    // console.log(category)
    return (
        <div role="tablist" className="tabs tabs-border flex flex-row justify-center items-center">
            {
                categories.map(category=> <NavLink to={`/category/${category.category}`} role="tab" className={({ isActive }) => `tab lg:text-2xl font-thin ${isActive ? "tab-active" : ""}`}>{category.category}</NavLink>)
            }
            
        </div>
    );
};

export default Categories;