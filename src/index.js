import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from './App';
const val = document.getElementById("root");
ReactDOM.render(
<>
<Router>
<App/>
</Router>
</>
,val);