import SignIn from './Components/SignIn';
import MainContent from './Components/MainContent';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth} from './firebase';
import Modal from 'react-modal';
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