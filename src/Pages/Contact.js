import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className='w-full h-96 bg-slate-700 flex items-center justify-center'>
                <h1 className='font-bold text-5xl text-gray-100'>Contact Page</h1>
            </div>
            <div className='my-5 flex items-center justify-center'>
                <div className='flex w-72 flex-col my-3'>
                    <input className='my-2 border border-slate-700 outline-none p-3' type="text" placeholder='Enter your name' />
                    <input className='my-2 border border-slate-700 outline-none p-3' type="email" placeholder='Enter you email' />
                    <textarea className='resize-none my-3 border border-slate-700 p-3 outline-none' name="" id="" placeholder='Your message'></textarea>
                    <button className='bg-teal-700 p-3 text-lg text-gray-100 font-semibold my-3'>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;