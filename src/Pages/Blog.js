import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
        
    },[])
    return (
        <div>
            <div className='w-full h-96 bg-slate-700 flex items-center justify-center'>
                <h1 className='font-bold text-5xl text-gray-100'>Blog Page</h1>
            </div>
        <div className='grid grid-cols-3 gap-5 px-8 mt-9'>
            {
                blogs.map(blog => {
                    const { title, img, des } = blog;
                    return (
                        <div key={blog.id} className='p-3 rounded shadow-lg h-96'>
                        <div className='h-1/2 overflow-hidden'>
                        <img className='bg-cover bg-center rounded' src={img} alt="" />
                        </div>
                    <h1 className='font-bold text-2xl my-3'>{title}</h1>
                    <p className='mb-3'>{des.slice(0, 95)}...</p>
                    <Link to={title} state={{ img, des }} className='py-2 px-4 bg-teal-700 my-3  rounded text-gray-100 font-bold'>Read more</Link>
                </div>
                    )
                })
            }
            </div>
        </div>
    );
};

export default Blog;