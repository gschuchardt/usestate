import React from 'react'

import './Header.component.css'

import CounterPage from '../../pages/Couterpage/CouterPage';
import Home from '../../pages/Home/Home';
import FetchPage from '../../pages/Fetchpage/FetchPage';
import LoginPage from '../../pages/Loginpage/LoginPage';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
    return (
        <div>
                <div>
				<Router>
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="counter">Counter</Link>
                            </li>
                            <li>
                                <Link to="fetch">Fetch</Link>
                            </li>
                            <li>
                                <Link to="login">Login</Link>
                            </li>
                        </ul>
                    </div>
                    

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/counter">
                            <CounterPage />
                        </Route>
                        <Route path="/fetch">
                            <FetchPage />
                        </Route>
                        <Route path="/login">
                            <LoginPage />
                        </Route>
                    </Switch>
				</Router>
                </div>
			</div>
    )
}

export default Header
