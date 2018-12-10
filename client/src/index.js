import React from 'react';
import ReactDOM from 'react-dom';
// import registerServiceWorker from './registerServiceWorker';
import SemestreContainer from "./SemestreContainer";
import {  Route } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import Semestres from "./Components/Semestres";
import "./App.css";

ReactDOM.render(
    <BrowserRouter basename={"/"}>
        <div>
            <Route exact path={"/"} component={ Semestres }/>
            <Route path={"/semestre/:num"} component={ SemestreContainer }/>
        </div>
    </BrowserRouter >
    , document.getElementById('root')
);

