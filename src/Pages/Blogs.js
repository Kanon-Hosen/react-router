import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const Blogs = () => {
    const location = useLocation();
    console.log(location)
    const {title} = useParams();
    return (
        <div className='p-8'>
            <div className='w-full h-96 mb-5 overflow-hidden flex items-center justify-center bg-center bg-cover'>
                <img className='w-full h-full bg-cover bg-center' src={location.state.img} alt="" />
            </div>
            <h1 className='font-bold text-3xl my-5'>{title}</h1>
            <p className='font-semibold text-lg'>{location.state.des}</p>
        </div>
    );
};

export default Blogs;