import React from "react";
import ReactDOM from "react-dom";
// import registerServiceWorker from './registerServiceWorker';
import SemestreContainer from "./SemestreContainer";
import AdminContainer from "./AdminContainer";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Semestres from "./Components/Semestres";
import "./App.css";
import Main from "./Components/Admin/Main";
import SemesterAdmin from "./Components/Admin/SemesterAdmin";

ReactDOM.render(
  <BrowserRouter basename={"/"}>
    <div>
      <Route exact path={"/"} component={Semestres} />
      <Route path={"/semestre/:num"} component={SemestreContainer} />
      <Route path={"/admin"} component={AdminContainer} />
      <Route path={"/admin/home"} component={Main} />
      <Route path={"/admin/semestre/:semester_id"} component={SemesterAdmin} />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
