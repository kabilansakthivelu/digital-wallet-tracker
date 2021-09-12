import React from 'react'
import {auth} from '../firebase';
import {FaRupeeSign} from 'react-icons/fa';

const Home = () => {

    const bal = 10000;
    const cre = 2000;
    const deb = 45000;

    const resetWallet =()=>{
        alert("Are you sure to reset your wallet?");
    }

    return (
        <div className="border-2 border-blue-500 rounded-xl md:mt-20 mx-4 p-4 shadow-2xl flex flex-col items-center mb-4">
        <h1 className="text-xl text-blue-500 md:text-3xl font-bold">Welcome {auth.currentUser.displayName} !!</h1>
        <h1 className="text-xl my-4 md:text-2xl">Your wallet summary</h1>
        <div className="border-2 border-blue-500 w-48 md:w-52 xl:w-60 h-48 text-center mt-4 shadow-2xl rounded-2xl">
        <p className="mt-12 text-xl">Balance</p>
        <p className="flex items-center justify-center text-2xl mt-4"><FaRupeeSign/>{bal}</p>
        </div>
        <div className="md:flex md:space-x-24 md:mt-8 xl:space-x-60 xl:mt-12">
            <div className="border-2 border-blue-500 w-48 md:w-52 xl:w-60 h-48 text-center mt-4 shadow-2xl rounded-2xl">
            <p className="mt-12 text-xl">Credits</p>
            <p className="flex items-center justify-center text-2xl mt-4"><FaRupeeSign/>{cre}</p>
            </div>
             <div className="border-2 border-blue-500 w-48 md:w-52 xl:w-60 h-48 text-center mt-4 shadow-2xl rounded-2xl">
            <p className="mt-12 text-xl">Debits</p>
            <p className="flex items-center justify-center text-2xl mt-4"><FaRupeeSign/>{deb}</p>
            </div>
        </div>
        <button className="mt-8 border-2 w-36 h-14 rounded-2xl border-blue-500 text-blue-500 font-bold hover:bg-blue-300 hover:text-white md:mt-16 xl:mt-14" onClick={resetWallet}>Reset Wallet</button>
        </div>
    )
}

export default Home
