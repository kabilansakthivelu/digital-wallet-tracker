import React from 'react';
import {Link} from 'react-router-dom';

const Error = () => {
    return (
        <div className="md:mt-20 mx-4 p-4 shadow-2xl flex flex-col items-center mb-4">
            <h1 className="mt-4 text-lg">Sorry, this page is not available</h1>
            <Link to="/"><button title="Reset Wallet" className="mt-6 border-2 w-36 h-14 rounded-2xl border-blue-500 text-blue-500 font-bold hover:bg-blue-300 hover:text-white md:mt-8">Home page</button></Link>
        </div>
    )
}

export default Error
