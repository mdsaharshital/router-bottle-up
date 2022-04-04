import React from 'react';

const NotFound = () => {
    const img404 = `https://static.vecteezy.com/system/resources/previews/005/238/432/large_2x/internet-network-warning-404-error-page-or-file-not-found-for-web-page-free-vector.jpg`;
    return (
        <div>
            <div className='flex justify-center items-center'>
            <img src={img404} className=' p-3 md:w-1/2' alt="" />
            </div>
        </div>
    );
};

export default NotFound;