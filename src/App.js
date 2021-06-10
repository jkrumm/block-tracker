import React, {useEffect, useState} from 'react';
import {withRouter, Switch, Route, Link} from "react-router-dom";
import {Classes} from "@blueprintjs/core";
import Dashboard from "./containers/dashboard/Dashboard";
import Add from "./containers/add/Add";
import Account from "./containers/account/Account";
import './App.scss';
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";

export default withRouter(function App({location}) {
    const [headline, setHeadline] = useState('/');

    useEffect(() => {
        const {pathname} = location;
        console.log("New path:", pathname.toString());
        switch (pathname) {
            case '/add':
                setHeadline('Add Tracker');
                break;
            case '/account':
                setHeadline('Account');
                break;
            default:
                setHeadline('Dashboard');
        }
    }, [location.pathname]);

    return (
        <div className={`wrapper ${Classes.DARK}`}>
            <Header/>
            <main className={"main-grid-container"}>
                <Headline headline={headline}/>
                <Switch>
                    <Route path="/" exact><Dashboard/></Route>
                    <Route path="/add"><Add/></Route>
                    <Route path="/account"><Account/></Route>
                </Switch>
            </main>
            <footer>
                Copyright: SS 2021 / Hochschuule München - Blockchain Seminar / Johannes, Trajche, Kok
            </footer>
        </div>
    )
})