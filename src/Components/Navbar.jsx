import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='max-w-7xl mx-auto py-8'>
            <div className='flex items-center justify-between bg-amber-200 p-5 rounded-2xl'>
                <Link className='btn btn-ghost' to={'/'}>Best Coffee site</Link>
                <Link to={'/updateCoffee/:id'}>Update Coffee</Link>
                <Link to={'/signup'}>Sign_Up</Link>
                <Link to={'/signin'}>Sign_In</Link>
                <Link to={'/addCoffee'}><h2 className=''>Add coffee</h2></Link>
                <Link to={'/users'}><h2 className=''>Users</h2></Link>
            </div>
        </div>
    );
};

export default Navbar;