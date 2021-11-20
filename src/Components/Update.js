import React, {useRef, useContext, useState} from 'react';
import Modal from "./Modal";
import {ValuesContext} from './MainContent';
import {FaRupeeSign} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {auth} from '../firebase';
import {db} from '../firebase';

const Update = () => {

    const refTransactionType = useRef('');
    const refDescription = useRef('');
    const refAmount = useRef('');

    const [showModal, setShowModal] = useState(false)

    const updateTransaction = (e)=>{
        e.preventDefault();
        db.collection('users').doc(auth.currentUser.uid).collection('transactions').add({
            transactionType: refTransactionType.current.value,
            description: refDescription.current.value,
            amount: parseInt(refAmount.current.value),
            time: new Date().getTime().toString(),
        })
        refTransactionType.current.value='';
        refDescription.current.value='';
        refAmount.current.value='';
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false)
        }, 4000);
    }

    const {totalBalance} = useContext(ValuesContext);

    return (
        <div className="border-2 border-blue-500 rounded-xl md:mt-28 mx-4 p-4 shadow-2xl flex flex-col items-center pb-20">
            
            {showModal && <Modal message="Transaction added successfully !!"/>}
            
            <h1 className="text-xl text-blue-500 md:text-3xl font-bold md:my-2">Add a transaction</h1>

            <form className="mt-6 text-xl w-64 md:w-10/12 sm:w-96 lg:w-8/12 px-4 leading-loose lg:border-2 lg:border-blue-500 lg:rounded-xl lg:p-8 lg:leading-loose" onSubmit={updateTransaction}>

            <label htmlFor="transactionType">Transaction Type* </label><br/>
            <select required name="transactionType" id="transactionType" className="border-gray-400 border-2 w-56 sm:w-96 md:w-11/12 h-11 pl-2 lg:my-2" ref={refTransactionType}>
            <option value="">Please select</option>
            <option value="Credit">Credit</option>
            <option value="Debit">Dedit</option>
            </select><br/>
            <label htmlFor="description">Description* </label><br/>
            <input type="text" id="description" maxLength="22" required className="border-gray-400 border-2 w-56 sm:w-96 md:w-11/12 text-lg h-11 pl-2 lg:my-2" placeholder ="Describe your transaction" ref={refDescription}/><br/>
            <label htmlFor="amount">Amount in INR* </label><br/>
            <input type="number" id="amount" min="1" max="999999999" required className="border-gray-400 border-2 w-56 sm:w-96 md:w-11/12 text-lg h-11 pl-2 lg:my-2" placeholder="Enter the amount" ref={refAmount}/>
            <div className="flex justify-center">
            <button title="Add" className="mt-6 border-2 w-24 h-12 rounded-2xl border-blue-500 text-blue-500 font-bold hover:bg-blue-300 hover:text-white md:mt-10 xl:mt-10" >Add</button>
            </div>
            </form>
            <h1 className="text-xl my-6 md:text-2xl">Updated wallet balance: </h1>
            <p className="flex items-center text-xl"><FaRupeeSign/> {totalBalance}</p>
            <p className="text-center mt-4 md:mt-8 md:text-lg">For your previous transactions details, please visit <span className="text-blue-500"> <Link to="/history">History </Link> </span>tab</p>
        </div>
    )
}

export default Update
