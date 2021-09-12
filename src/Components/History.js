import React from 'react';
import {FaRupeeSign} from 'react-icons/fa';
import {MdEdit, MdDelete} from 'react-icons/md';


const testContent = [{
    type: "Credit",
    desc: "Salary",
    amount: "2,00,000",
},{
    type: "Debit",
    desc: "Loan",
    amount: "50,000",
},{
    type: "Debit",
    desc: "College fees",
    amount: "20,000",
},{
    type: "Credit",
    desc: "From user 1",
    amount: "80,000",
},{
    type: "Debit",
    desc: "To user 2",
    amount: "200",
}]

const History = () => {
    return (<>
        <h1 className="text-xl text-blue-500 md:text-3xl md:mt-24 font-bold text-center my-4">Your transactions</h1>
        <div className="border-2 border-blue-500 rounded-xl md:mt-10 mx-4 p-4 shadow-2xl mb-4 md:w-2/3 md:m-auto lg:w-1/2">
        {testContent.map((item)=>{
            return(
            <div>
                <h1 className="mt-2 font-bold flex justify-between">{item.desc}<MdEdit className="border-2 border-black text-3xl p-1 my-1 rounded-md"/></h1>
                <div className="flex justify-between">
                <h1 className="my-2 flex items-center">{item.type} - <FaRupeeSign className="font-light"/> {item.amount}</h1>
                <MdDelete className="border-2 border-black text-3xl p-1 rounded-md"/>
                </div>
                <hr className="mt-4"/>
            </div>)
        })}
        </div>
    </>)
}

export default History
