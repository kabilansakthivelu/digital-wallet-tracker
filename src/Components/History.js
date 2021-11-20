import React, {useContext, useState, useEffect, useRef} from 'react';
import Modal from './Modal';
import {ValuesContext} from './MainContent';
import {FaRupeeSign} from 'react-icons/fa';
import {MdEdit, MdDelete} from 'react-icons/md';
import {auth} from '../firebase';
import {db} from '../firebase';

const History = () => {

    const {transactions, deleteTransaction} = useContext(ValuesContext);

    const [noTransactions, setNoTransactions] = useState(false);

    const [idToBeUpdated, setIdToBeUpdated] = useState();

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    useEffect(()=>{
        if(transactions.length === 0){
            setNoTransactions(true)
        }else{
            setNoTransactions(false)
        }
    },[transactions])

    const refEditTransactionType = useRef('');
    const refEditDescription = useRef('');
    const refEditAmount = useRef('');

    const editValue = (id, type, description, amount) =>{
        document.getElementById('editArea').style.display = "inherit"
        setIdToBeUpdated(id);
        window.scrollTo(0,0);
        refEditTransactionType.current.value = type;
        refEditDescription.current.value = description;
        refEditAmount.current.value = amount;
    }

    const editAreaSave = (e) =>{
        e.preventDefault();
        db.collection('users').doc(auth.currentUser.uid).collection('transactions').doc(idToBeUpdated).set({
            transactionType: refEditTransactionType.current.value,
            description: refEditDescription.current.value,
            amount: parseInt(refEditAmount.current.value),
            time: new Date().getTime().toString(),
        })
        document.getElementById('editArea').style.display = "none";
        setShowSuccessModal(true);
        setTimeout(() => {
            setShowSuccessModal(false);
        }, 4000);
    }

    const editAreaClose =(e)=>{
        e.preventDefault();
        document.getElementById('editArea').style.display = "none";
    }

    return (<>
        <h1 className="text-xl text-blue-500 md:text-3xl md:mt-24 font-bold text-center my-4">Your transactions</h1>

        <div className="flex justify-center mb-4">
        {showSuccessModal && <Modal message="Transaction updated successfully !!"/>}
        </div>

        <div id="editArea" className="hidden">

            <form className="text-xl w-72 sm:w-7/12 leading-loose border-2 border-blue-500 lg:rounded-xl lg:p-8 lg:leading-loose mb-4 rounded-xl md:mt-10 mx-auto p-4 shadow-2xl md:w-2/3 md:m-auto lg:w-1/2" onSubmit={editAreaSave}>

            <h1 className="text-center text-blue-500 font-bold text-lg md:text-2xl">Edit transaction</h1>

            <label htmlFor="transactionType" className="text-lg">Transaction Type* </label><br/>

            <select name="transactionType" id="transactionType" required className="border-gray-400 border-2 w-64 sm:w-11/12 md:w-11/12 h-11 pl-2 lg:my-2" ref={refEditTransactionType}>
            <option value="">Please select</option>
            <option value="Credit">Credit</option>
            <option value="Debit">Dedit</option>
            </select><br/>

            <label htmlFor="description" className="text-lg">Description* </label><br/>

            <input type="text" id="description" required className="border-gray-400 border-2 w-64 sm:w-11/12 md:w-11/12 text-lg h-11 pl-2 lg:my-2" placeholder ="Your transaction details" ref={refEditDescription}/><br/>

            <label htmlFor="amount" className="text-lg">Amount in INR* </label><br/>

            <input type="number" id="amount" min="1" max="999999999" required className="border-gray-400 border-2 w-64 sm:w-11/12 md:w-11/12 text-lg h-11 pl-2 lg:my-2" placeholder="Enter the amount" ref={refEditAmount}/><br/>

            <div className="flex justify-center">
            <button className="mt-4 border-2 w-20 sm:h-12 rounded-2xl border-blue-500 text-blue-500 font-bold hover:bg-blue-400 hover:text-white md:mt-4">Save</button>
            <button className="mt-4 border-2 w-24 sm:h-12 rounded-2xl border-blue-500 text-blue-500 font-bold hover:bg-blue-400 hover:text-white md:mt-4 ml-4 md:ml-8" onClick={editAreaClose}>Cancel</button>
            </div>
            </form>

        </div>

        <div className="border-2 border-blue-500 rounded-xl md:mt-10 mx-4 p-4 shadow-2xl mb-4 md:w-2/3 md:m-auto lg:w-1/2">

        {noTransactions ? <h1 className="text-center my-1 md:my-3 md:text-lg">No transactions found</h1> : transactions.map((item)=>{

            const initialTime = parseInt(item.time);
            const getTime = new Date(initialTime).toString();
            const setTime = getTime.split(" ");
            const time = setTime[1] +" "+ setTime[2] +" "+ setTime[3] + " at " + setTime[4] + " IST";

            if(item.transactionType === "Credit"){
            return(
            <div key={item.id}>
                <div className="bg-green-100 py-2 my-2 rounded-2xl">
                <h1 className="px-2 font-semibold sm:text-lg lg:text-xl">{item.description}</h1>
                <div className="flex justify-between px-2">
                <h1 className="my-2 flex items-center">{item.transactionType} : <FaRupeeSign className="font-light"/> {item.amount}</h1>
                <MdEdit title="Edit" className="border-2 border-black text-3xl p-1 my-1 rounded-md cursor-pointer" onClick={()=>{editValue(item.id, item.transactionType, item.description, item.amount)}}/>
                </div>
                <div className="flex justify-between px-2">
                <p className="text-black text-sm sm:text-base">{time}</p>
                <MdDelete title="Delete" className="border-2 border-black text-3xl p-1 rounded-md cursor-pointer" onClick={()=>{deleteTransaction(item.id)}}/>
                </div>
                </div>
                <hr className="mt-2 border-gray-500"/>
            </div>)}

            else{
            return(
            <div key={item.id}>
            <div className="bg-red-100 py-2 my-2 rounded-2xl">
                <h1 className="px-2 font-semibold sm:text-lg lg:text-xl">{item.description}</h1>
                <div className="flex justify-between px-2">
                <h1 className="my-2 flex items-center">{item.transactionType} : <FaRupeeSign className="font-light"/> {item.amount}</h1>
                <MdEdit title="Edit" className="border-2 border-black text-3xl p-1 my-1 rounded-md cursor-pointer" onClick={()=>{editValue(item.id, item.transactionType, item.description, item.amount)}}/>
                </div>
                <div className="flex justify-between px-2">
                <p className="text-black text-sm sm:text-base">{time}</p>
                <MdDelete title="Delete" className="border-2 border-black text-3xl p-1 rounded-md cursor-pointer" onClick={()=>{deleteTransaction(item.id)}}/>
                </div>
                </div>
                <hr className="mt-2 border-gray-500"/>
            </div>)}
        })}

        </div>
    </>)
}

export default History

