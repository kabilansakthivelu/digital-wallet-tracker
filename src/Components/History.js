import React, {useContext, useState, useEffect} from 'react';
import {ValuesContext} from './MainContent';
import {FaRupeeSign} from 'react-icons/fa';
import {MdEdit, MdDelete} from 'react-icons/md';

const History = () => {

    const {transactions, deleteTransaction} = useContext(ValuesContext);

    const [noTransactions, setNoTransactions] = useState(false)

    useEffect(()=>{
        if(transactions.length === 0){
            setNoTransactions(true)
        }else{
            setNoTransactions(false)
        }
    },[transactions])

    return (<>
        <h1 className="text-xl text-blue-500 md:text-3xl md:mt-24 font-bold text-center my-4">Your transactions</h1>
        <div className="border-2 border-blue-500 rounded-xl md:mt-10 mx-4 p-4 shadow-2xl mb-4 md:w-2/3 md:m-auto lg:w-1/2">
        {noTransactions ? <h1 className="text-center my-1 md:my-3 md:text-lg">No transactions found</h1> : transactions.map((item)=>{
            return(
            <div key={item.id}>
                <h1 className="mt-2 font-bold sm:text-lg lg:text-xl flex justify-between">{item.description}<MdEdit className="border-2 border-black text-3xl p-1 my-1 rounded-md"/></h1>
                <div className="flex justify-between">
                <h1 className="my-2 flex items-center">{item.transactionType} - <FaRupeeSign className="font-light"/> {item.amount}</h1>
                <MdDelete className="border-2 border-black text-3xl p-1 rounded-md" onClick={()=>{deleteTransaction(item.id)}}/>
                </div>
                <hr className="mt-2 border-gray-500"/>
            </div>)
        })}
        </div>
    </>)
}

export default History
