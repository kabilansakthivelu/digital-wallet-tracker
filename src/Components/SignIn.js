import React from 'react';
import firebase from 'firebase/compat/app'


const signIn = () =>{
 let provider = new firebase.auth.GoogleAuthProvider();
 firebase.auth().signInWithPopup(provider);
}

const SignIn = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="m-6 min-w min-h rounded-3xl bg-blue-400">
            <h1 className="p-4 text-2xl text-center font-bold text-white">Hello !</h1>
            <h1 className="p-4 text-2xl text-center font-bold text-white">Welcome to your Digital Wallet tracker</h1>
            <p className="p-4 text-xl text-center font-bold text-white">Sign in with Google?</p>
            <div className="flex justify-center">
            <button className="border-2 mb-4 rounded-3xl px-3 py-2 hover:bg-blue-500 font-bold text-white" onClick={signIn}>Sign In</button>
            </div>
            </div>
        </div>
    )
}

export default SignIn