import React, {useContext, useState} from 'react';
import Modal from 'react-modal';
import {ValuesContext} from './MainContent';
import {auth} from '../firebase';
import {FaRupeeSign} from 'react-icons/fa';

const Home = () => {

    const {deleteCollection, totalCredits, totalDebits, totalBalance} = useContext(ValuesContext);

    const [modalOpen, setModalOpen] = useState(false);

    const modalYesClick = () =>{
        deleteCollection();
        setModalOpen(false);
    }

    const guestUser = "Guest User";
    const fullName = auth.currentUser.displayName ? auth.currentUser.displayName.split(" ") : guestUser.split(" ");
    const firstName = fullName[0];

    return (
        <div className="border-2 border-blue-500 bg-gray-300 rounded-xl md:mt-28 mx-4 p-4 shadow-2xl flex flex-col items-center pb-16">
        <h1 className="text-2xl text-blue-500 md:text-3xl font-bold w-52 md:w-80 truncate text-center">Hi <span className="capitalize">{firstName}</span>
        </h1>
        <h1 className="text-xl my-4 md:text-2xl">Your wallet summary</h1>
        <div className="border-2 border-blue-500 bg-white w-48 md:w-52 xl:w-60 h-48 text-center mt-4 shadow-2xl rounded-2xl">
        <p className="mt-12 text-xl">Balance</p>
        <p className="flex items-center justify-center text-2xl mt-4"><FaRupeeSign/>{totalBalance}</p>
        </div>
        <div className="md:flex md:space-x-24 md:mt-8 xl:space-x-60 xl:mt-12">
            <div className="border-2 border-blue-500 bg-white w-48 md:w-52 xl:w-60 h-48 text-center mt-4 shadow-2xl rounded-2xl">
            <p className="mt-12 text-xl">Credits</p>
            <p className="flex items-center justify-center text-2xl mt-4"><FaRupeeSign/>{totalCredits}</p>
            </div>
             <div className="border-2 border-blue-500 bg-white w-48 md:w-52 xl:w-60 h-48 text-center mt-4 shadow-2xl rounded-2xl">
            <p className="mt-12 text-xl">Debits</p>
            <p className="flex items-center justify-center text-2xl mt-4"><FaRupeeSign/>{totalDebits}</p>
            </div>
        </div>
        <button title="Reset Wallet" className="mt-8 border-2 w-36 h-14 rounded-2xl border-blue-500 bg-white text-blue-500 font-bold hover:bg-blue-300 hover:text-white md:mt-24 xl:mt-28" onClick={()=>{setModalOpen(true)}}>Reset Wallet</button>

        <Modal isOpen={modalOpen} onRequestClose={()=>{setModalOpen(false)}}
        style={{content:{
            borderColor: "blue",
            borderRadius : '1rem',
            height: '11rem',
            margin: 'auto',
            width: '65%',
            backgroundColor: '#4169E1',
            },
            }}>

            <div className="text-center">
            <h2 className="text-xl mt-3 sm:mt-4 text-white md:mt-5">Are you sure to reset your wallet?</h2>
            <button className="mt-4 border-2 w-16 h-8 rounded-2xl border-white text-white font-bold hover:bg-white hover:text-black md:mt-8" onClick={modalYesClick}>Yes</button>
            <button className="mt-4 border-2 w-16 h-8 rounded-2xl border-white text-white font-bold hover:bg-white hover:text-black md:mt-8 ml-4 md:ml-8" onClick={()=>{setModalOpen(false)}}>No</button>
            </div>
        </Modal>
        </div>
    )
}

export default Home
