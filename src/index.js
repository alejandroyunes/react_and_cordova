import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router } from 'react-router-dom'


const startApp = ()=> {
    ReactDOM.render(

        <Router>
            <App />
        </Router>


        , document.getElementById('root'));
 }

 if (window.cordova){
     document.addEventListener('deviceready', startApp, false)
 }else {
     startApp()
 }


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
