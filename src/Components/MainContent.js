import React, {useState, useEffect} from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Update from './Update';
import History from './History';
import More from './More';
import Error from './Error';
import {auth} from '../firebase';
import {db} from '../firebase';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export const ValuesContext = React.createContext();

const MainContent = () => {

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

    const creditsTransactions = transactions.filter((transaction)=>{
        return (transaction.transactionType === "Credit")})

    const totalCredits = creditsTransactions.reduce((total,currentValue)=>{
        total += currentValue.amount;
        return total;
    },0)

    const debitsTransactions = transactions.filter((transaction)=>{
        return (transaction.transactionType === "Debit")})

    const totalDebits = debitsTransactions.reduce((total,currentValue)=>{
        total += currentValue.amount;
        return total;
    },0)

    const totalBalance = totalCredits - totalDebits;

    const deleteTransaction = (id) =>{
        db.collection('users').doc(auth.currentUser.uid).collection('transactions').doc(id).delete();
    }

    const documentIds = transactions.map((transaction)=>{
        return transaction.id
    })

    const deleteCollection = () =>{
        documentIds.map((id)=>{
            return db.collection('users').doc(auth.currentUser.uid).collection('transactions').doc(id).delete()
        })}

    return (
        <Router>
        <Navbar />
        <ValuesContext.Provider value={{transactions, deleteTransaction, deleteCollection, totalCredits, totalDebits, totalBalance}}>
            <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/update'>
                <Update />
            </Route>
            <Route path='/history'>
                <History />
            </Route>
            <Route path='/more'>
                <More />
            </Route>
            <Route path='*'>
                <Error />
            </Route>
        </Switch>
        </ValuesContext.Provider>
        </Router>
    )
}

export default MainContent
