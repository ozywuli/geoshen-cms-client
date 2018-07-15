import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './styles/app.scss';

import Home from './routes/Home/Home';

ReactDOM.render(
    <Router>
        <div className="container">
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        </div>
    </Router>
    ,document.getElementById('app')
);

module.hot.accept();