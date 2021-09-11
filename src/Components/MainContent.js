import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Update from './Update';
import History from './History';
import More from './More';
import Error from './Error';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const MainContent = () => {

    return (
        <Router>
        <Navbar />
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
        </Router>
    )
}

export default MainContent
