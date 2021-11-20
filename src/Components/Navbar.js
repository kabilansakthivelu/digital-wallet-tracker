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
        if (window.innerWidth >= 768){
            setShowHamburger(false)
        }else{
            setShowHamburger(true)
        }
    }

    return (
        <>
        { showHamburger ? (
        <div className="flex justify-between items-center p-4 text-blue-500 font-bold text-xl">
            <Link to="/"><h2>Digital Wallet</h2></Link>
            { !menuClose ? (<GiHamburgerMenu onClick={()=>{setShowMenu(true); setMenuClose(true)}}/>) : 
            (<AiOutlineClose className="font-bold text-2xl" onClick={()=>{setShowMenu(false); setMenuClose(false)}}/>)
            }
            { showMenu ? (
                <div className="w-full h-full fixed top-14 right-0 bg-blue-400 text-white p-6 leading-loose">
                <ul className="flex flex-col">
                <Link to="/" onClick={()=>{setShowMenu(false); setMenuClose(false)}}>Home</Link>
                <Link to="/update" onClick={()=>{setShowMenu(false); setMenuClose(false)}}>Add</Link>
                <Link to="/history" onClick={()=>{setShowMenu(false); setMenuClose(false)}}>History</Link>
                <Link to="/about" onClick={()=>{setShowMenu(false); setMenuClose(false)}}>About</Link>
                <Link to="/sign-out" onClick={()=>{setShowMenu(false); setMenuClose(false)}}>Sign Out</Link>
                </ul>
                </div>
            ) : ""}
        </div> ) : (
            <div className="w-full h-2 fixed top-0 bg-blue-100 text-blue-500 font-bold flex items-center p-8 text-2xl">
            <Link to="/"><h1>Digital Wallet</h1></Link>
            <div className="">
            <ul className="flex fixed right-0 top-5 text-lg lg:text-xl space-x-6 lg:space-x-12 xl:space-x-16 pr-8">
           <Link to="/">Home</Link>
            <Link to="/update">Add</Link>
            <Link to="/history">History</Link>
            <Link to="/about">About</Link>
            <Link to="/sign-out">Sign Out</Link>
            </ul>
            </div>
            </div>
        )}
        </>
    )
}

export default Navbar
