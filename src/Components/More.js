import React from 'react';
import {auth} from '../firebase';
import {Link} from 'react-router-dom';

const More = () => {

    const signOut = () =>{
        auth.signOut();
    }

    return (
        <div className="border-2 border-blue-500 rounded-xl md:mt-20 mx-4 p-4 shadow-2xl flex flex-col items-center mb-4">
            <h1 className="text-xl md:text-2xl">Sign out of your account ?</h1>
            <Link to="/"><button title="Sign Out" className="mt-6 border-2 w-36 h-14 rounded-2xl border-blue-500 text-blue-500 font-bold hover:bg-blue-300 md:mt-10 hover:text-white xl:mt-8" onClick={signOut}>Sign Out</button></Link>
            <p className="text-xl mt-6 md:text-2xl">About</p>
            <ul className="list-disc p-6 leading-relaxed sm:w-5/6 sm:text-xl md:w-2/4 xl:w-2/5">
            <li>
             This web application is your digital wallet tracker. </li>
             <li>
             You can get an overview of your wallet balance and also credits and debits on your wallet. </li>
             <li>User can not only add a new transaction but also can edit and delete already added transactions which are available in History tab. </li>
             <li>The credit and debit transactions are differentiated by green and red background color respectively</li>
             <li>This is a responsive site for all types of devices.</li>
             </ul>
            <h1 className="mt-2">Version: 0.0.1</h1>
            <h1 className="mt-4">&copy; 2021 - Kabilan Sakthivelu</h1>
        </div>
    )
}

export default More
