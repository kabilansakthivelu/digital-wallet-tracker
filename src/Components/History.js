import React,{useState, useEffect} from 'react';
import {FaRupeeSign} from 'react-icons/fa';
import {MdEdit, MdDelete} from 'react-icons/md';
import {auth} from '../firebase';
import {db} from '../firebase';

const History = () => {

    const [transactions, setTransactions] = useState([]);

    useEffect(()=>{
        const ref = db.collection('users').doc(auth.currentUser.uid).collection('transactions');
        ref.onSnapshot((snapshot)=>{
            const arr = [];
            snapshot.forEach((doc)=>{
            arr.push({...doc.data(), id: doc.id})
            })
        setTransactions(arr)})
        return(()=>{
            setTransactions([]);
        })
    },[])

    const deleteTransaction = (id) =>{
        db.collection('users').doc(auth.currentUser.uid).collection('transactions').doc(id).delete();
    }

    return (<>
        <h1 className="text-xl text-blue-500 md:text-3xl md:mt-24 font-bold text-center my-4">Your transactions</h1>
        <div className="border-2 border-blue-500 rounded-xl md:mt-10 mx-4 p-4 shadow-2xl mb-4 md:w-2/3 md:m-auto lg:w-1/2">
        {transactions.map((item)=>{
            return(
            <div key={item.id}>
                <h1 className="mt-2 font-bold flex justify-between">{item.description}<MdEdit className="border-2 border-black text-3xl p-1 my-1 rounded-md"/></h1>
                <div className="flex justify-between">
                <h1 className="my-2 flex items-center">{item.transactionType} - <FaRupeeSign className="font-light"/> {item.amount}</h1>
                <MdDelete className="border-2 border-black text-3xl p-1 rounded-md" onClick={()=>{deleteTransaction(item.id)}}/>
                </div>
                <hr className="mt-4"/>
            </div>)
        })}
        </div>
    </>)
}

export default History
