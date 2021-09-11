import React, {useState, useEffect} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [menuClose, setMenuClose] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showHamburger, setShowHamburger] = useState();

    useEffect(()=>{
        screenSize()
        window.addEventListener('resize', screenSize);
        return ()=>{
           window.removeEventListener('resize', screenSize); 
        }
    },[])

    const screenSize = () =>{
        if (window.innerWidth > 768){
            setShowHamburger(false)
        }else{
            setShowHamburger(true)
        }
    }



    return (
        <>
        { showHamburger ? (
        <div className="flex justify-between items-center p-4 text-blue-500 font-bold text-xl">
            <h2>Digital Wallet</h2>
            { !menuClose ? (<GiHamburgerMenu onClick={()=>{setShowMenu(true); setMenuClose(true)}}/>) : 
            (<AiOutlineClose className="font-bold text-2xl" onClick={()=>{setShowMenu(false); setMenuClose(false)}}/>)
            }
            { showMenu ? (
                <div className="w-full h-full fixed top-16 right-0 bg-blue-500 text-white p-6 leading-loose">
                <ul>
                <li >Home</li>
                <li>Update</li>
                <li>History</li>
                <li>More</li>
                </ul>
                </div>
            ) : ""}
        </div> ) : (
            <div className="fixed w-full h-20 bg-blue-100 text-blue-500 font-bold flex items-center p-8 text-2xl">
            <h1>Digital Wallet</h1>
            <div className="">
            <ul className="flex fixed right-0 top-6 text-xl space-x-9 lg:space-x-16 pr-8">
            <li>Home</li>
            <li>Update</li>
            <li>History</li>
            <li>More</li>
            </ul>
            </div>
            </div>
        )}
        </>
    )
}

export default Navbar
