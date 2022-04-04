import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-center py-5 bg-purple-400'>
                <CustomLink className='' to={'/home'}>Home</CustomLink>
                <CustomLink to={'/review'}>Reviews</CustomLink>
                <CustomLink to={'/dashboard'}>Dashboard</CustomLink>
                <CustomLink className='m-2' to={'/about'}>About</CustomLink>
                <CustomLink to={'/blogs'}>Blogs</CustomLink>
            </nav>
        </div>
    );
};

export default Header;