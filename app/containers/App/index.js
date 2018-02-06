/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import Detail from 'containers/Detail/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
        <a className="navbar-brand" href="/">Cointalkr</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse justify-content-center navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#" >Total market caps: <span className="text-white font-weight-bold">$32,233,545,351</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" >Cryptocurrencies: <span className="text-white font-weight-bold">1374</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" >Market: <span className="text-white font-weight-bold">7478</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" >Top mentioned: <span className="text-white font-weight-bold">BTC</span></a>
                </li>
            </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/chart" component={Detail} />
        <Route component={NotFoundPage} />
      </Switch>
      <div className="p-3 bg-white">
        <div className="border-top m-3 border-dark" style={{ border: '0.5px solid #c2cfd6' }}></div>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-dark active" href="#">About US</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">FAQ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark" href="#">Report</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
