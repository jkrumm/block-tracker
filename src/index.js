import React from 'react';
import { Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

// BlueprintJS
import { FocusStyleManager } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";
import "@blueprintjs/table/lib/css/table.css";
import "normalize.css/normalize.css";
import "./index.scss";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('root')
)

FocusStyleManager.onlyShowFocusOnTabs();