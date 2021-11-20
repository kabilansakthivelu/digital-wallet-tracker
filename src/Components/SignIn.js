import React from 'react';
import firebase from 'firebase/compat/app';
import {FcGoogle} from 'react-icons/fc';


const signIn = () =>{
 let provider = new firebase.auth.GoogleAuthProvider();
 firebase.auth().signInWithPopup(provider);
}

const guestLogin = () =>{
    const email = process.env.REACT_APP_GUEST_EMAIL;
    const password = process.env.REACT_APP_GUEST_PASSWORD;
    firebase.auth().signInWithEmailAndPassword(email, password);
}

const SignIn = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="m-6 min-w min-h rounded-3xl bg-blue-400">
            <h1 className="p-4 text-2xl text-center font-bold text-white mt-4">Hello !!</h1>
            <h1 className="p-4 text-2xl text-center font-bold text-white">Welcome to your Digital Wallet tracker</h1>
            <div className="flex justify-center mb-5">
            <button className="flex border-2 mt-4 mb-4 rounded-3xl px-3 py-2 hover:bg-blue-100 bg-white :text-black font-bold text-black text-lg" onClick={signIn}><FcGoogle className="mt-1 mr-2"/> Sign in</button>
            <button className="flex border-2 mt-4 mb-4 rounded-3xl px-3 py-2 ml-2 hover:bg-blue-100 bg-white :text-black font-bold text-black text-lg" onClick={guestLogin}>Guest Login</button>
            </div>
            </div>
        </div>
    )
}

export default SignIn