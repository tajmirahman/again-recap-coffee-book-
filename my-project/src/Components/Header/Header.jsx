import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <Link className='text-xl font-bold'>Coffee_Book</Link>
            </div>
            <div className="navbar-center space-x-2">
                
                <NavLink to={'/'} className="  text-xl ">Home</NavLink>
                <NavLink to={'/coffee'} className=" text-xl ">Coffee</NavLink>
                <NavLink to={'/dashboard'} className=" text-xl ">Dashboard</NavLink>
            </div>
            <div className="navbar-end">
               <div>
                <button className='btn btn-ghost'>Login</button>
               </div>
            </div>
        </div>
    );
};

export default Header;