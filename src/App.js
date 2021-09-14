import firebase from 'firebase/compat/app';
import {app} from './firebase';
import {db} from './firebase';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import SignIn from './Components/SignIn';
import MainContent from './Components/MainContent';
import Modal from 'react-modal'
Modal.setAppElement('#root');

function App() {

  const [user] = useAuthState(auth);

  return (
    <>
    { user ? <MainContent/> : <SignIn/>}
    </>
  );
}

export default App;