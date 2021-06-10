import React, {useEffect, useState} from 'react';
import {IndexRoute, Switch, Route} from 'react-router-dom';
// import {Route, Switch} from 'react-router-dom';
import Dashboard from "./containers/dashboard/Dashboard";
import Add from "./containers/add/Add";
import Account from "./containers/account/Account";
import './App.scss';
import Header from "./components/header/Header";

function App() {
    /* const [clientId, setClientId] = useState('');


    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        setClientId(urlParams.get('clientId'));
        console.log(clientId);
    }); */

    return (
        <div className="wrapper">
            <Header/>
            <Route path="/" component={App}>
                <Route path="/" exact><Dashboard/></Route>
                <Route path="/add"><Add/></Route>
                <Route path="/account"><Account/></Route>
            </Route>
            <main>
                <Switch>
                    <Route path="/" exact><Dashboard/></Route>
                    <Route path="/add"><Add/></Route>
                    <Route path="/account" component={Account}/>
                </Switch>
            </main>
            {/*<footer>*/}
            {/*    TEST*/}
            {/*</footer>*/}
        </div>
    )
}

export default App;