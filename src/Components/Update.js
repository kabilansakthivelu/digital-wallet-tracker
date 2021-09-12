import React from 'react';
import {FaRupeeSign} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Update = () => {
    return (
        <div className="border-2 border-blue-500 rounded-xl md:mt-20 mx-4 p-4 shadow-2xl flex flex-col items-center mb-4">
            <h1 className="text-xl text-blue-500 md:text-3xl font-bold">Add a transaction</h1>
            <form className="mt-6 text-xl w-64 md:w-10/12 sm:w-96 lg:w-8/12 px-4 leading-loose lg:border-2 lg:border-blue-500 lg:rounded-xl lg:p-8 lg:leading-loose">
            <label htmlFor="transactionType">Transaction Type: </label>
            <select name="transactionType" id="transactionType" className="border-gray-400 border-2 w-56 sm:w-96 md:w-11/12 h-11 pl-2 lg:my-2">
             <option value="null">Please select</option>
            <option value="credit">Credit</option>
            <option value="debit">Dedit</option>
            </select>
            <label htmlFor="description">Description: </label>
            <input type="text" id="description" className="border-gray-400 border-2 w-56 sm:w-96 md:w-11/12 text-lg h-11 pl-2 lg:my-2" placeholder ="Describe your transaction"/>
            <label htmlFor="amount">Amount: </label>
            <input type="" id="amount" className="border-gray-400 border-2 w-56 sm:w-96 md:w-11/12 text-lg h-11 pl-2 lg:my-2" placeholder="Enter the amount"/>
            <div className="flex justify-center">
            <button className="mt-6 border-2 w-16 h-10 rounded-2xl border-blue-500 text-blue-500 font-bold hover:bg-blue-300 hover:text-white md:my-10 xl:mt-14 lg:mt-8" >Add</button>
            </div>
            </form>
            <h1 className="text-xl my-4 md:text-2xl">Updated wallet balance: </h1>
            <p className="flex items-center text-xl"><FaRupeeSign/> 10,000</p>
            <p className="text-center mt-4 md:mt-8 md:text-lg">For your previous transactions details, please visit <span className="text-blue-500"> <Link to="/history">History </Link> </span>tab</p>
        </div>
    )
}

export default Update
