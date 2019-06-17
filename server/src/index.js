// content of index.js
const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
// const controller = require("./src/modules/semestre/controller");
const db = require("./config/db");
const bodyParser = require("body-parser");

import * as BioController from "./modules/bio/controller";
import * as ContactController from "./modules/contact/controller";
import * as Controller from "./modules/semestre/controller";
import * as AdminController from "./modules/admin/controller";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.append("Access-Control-Allow-Headers", "Content-Type");
  next();
});

require("babel-register")({
  presets: ["env"]
});

app.get("/semestre/", Controller.getSemestre);
app.get("/episodios/", Controller.getEpisodios);
app.get("/sobre/", BioController.getSobre);
app.get("/getSemesters/", AdminController.getSemesters);
app.get("/getBio/", AdminController.getBio);

app.post("/contact/", ContactController.contact);
app.post("/login/", AdminController.login);
app.post("/signup/", AdminController.signUp);
app.post("/createSemester/", AdminController.createSemester);
app.post("/updateSemester/", AdminController.updateSemester);
app.post("/deleteSemester/", AdminController.deleteSemester);
app.post("/updateBio/", AdminController.updateBio);
// app.post("/createBio/", AdminController.createBio);

app.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }
  db();
  console.log(`server is listening on ${port}`);
});
