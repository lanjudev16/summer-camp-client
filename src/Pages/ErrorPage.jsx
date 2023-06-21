import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-[100vh] w-full object-cover'>
            <img className='h-[100vh] w-full object-cover' src="https://img.freepik.com/free-vector/error-404-concept-landing-page_52683-13617.jpg?size=626&ext=jpg" alt=""  />
            <span className='text-white text-5xl bg-slate-500 px-5 py-5 rounded font-bold absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'><Link to="/"><span>Go to Home</span></Link></span>
        </div>
    );
};

export default ErrorPage;