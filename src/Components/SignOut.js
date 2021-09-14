import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import {auth} from '../firebase';
import {Link, useHistory} from 'react-router-dom';

const SignOut = () => {

    const [showSignOutModal, setShowSignOutModal] = useState(false);

    useEffect(()=>{
        setShowSignOutModal(true);
    },[])

    const signOutYes = () =>{
        auth.signOut();
        setShowSignOutModal(false);
    }

    const history = useHistory();

    const signOutNo = () =>{
        history.goBack();
        setShowSignOutModal(false);
    }


    return (
        <div>
            <Modal isOpen={showSignOutModal} onRequestClose={signOutNo}
        style={{content:{
            borderColor: "blue",
            borderRadius : '1rem',
            height: '11rem',
            margin: 'auto',
            width: '65%',
            backgroundColor: '#4169E1',
            },
            }}>

            <div className="text-center">
            <h2 className="text-xl mt-3 sm:mt-4 text-white md:mt-5">Are you sure to sign out?</h2>
            <Link to="/"><button className="mt-4 border-2 w-16 h-8 rounded-2xl border-white text-white font-bold hover:bg-white hover:text-black md:mt-8" onClick={signOutYes}>Yes</button></Link>
            <button className="mt-4 border-2 w-16 h-8 rounded-2xl border-white text-white font-bold hover:bg-white hover:text-black md:mt-8 ml-4 md:ml-8" onClick={signOutNo}>No</button>
            </div>
        </Modal>
        </div>
    )
}

export default SignOut
