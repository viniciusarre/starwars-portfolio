import React, { Component } from "react";
import { Row, Col, Grid, Panel, Button, FormControl } from "react-bootstrap";
import md5 from "md5";
import Axios from "axios";
import { Redirect } from "react-router";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  login = async () => {
    console.log("LOGIN< PASSWORD ", this.state.email, md5(this.state.password));
    try {
      let response = await Axios.post(
        "https://starwars-portfolio.herokuapp.com/login",
        {
          email: this.state.email,
          password: md5(this.state.password)
        }
      );
      console.log("RESPONSE >> ", response);
      if (response.status === 200) {
        console.log("LOGGED IN!");
        localStorage.setItem("loggedIn", true);
      } else {
        console.log("ERR!");
        localStorage.setItem("loggedIn", false);
      }
    } catch (err) {
      console.log("ERR!");
      localStorage.setItem("loggedIn", false);
    }
  };
  render() {
    console.log("GET ITEM >> ", localStorage.getItem("loggedIn") === "true");
    return localStorage.getItem("loggedIn") === "true" ? (
      <Redirect to="/admin/home" />
    ) : (
      <form>
        <h1
          style={{ marginTop: "1em", marginBottom: "2em", textAlign: "center" }}
        >
          Login
        </h1>
        <Col lg={6} lgOffset={3}>
          <div style={{ marginBottom: "1em" }}>
            E-mail:{" "}
            <FormControl
              type="email"
              onChange={e => this.setState({ email: e.target.value })}
            />
            {"\n"}
          </div>
          Senha:{" "}
          <FormControl
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <Button
            bsStyle="primary"
            bsSize="large"
            block
            style={{ marginTop: 20 }}
            onClick={() => this.login()}
          >
            Enviar
          </Button>
        </Col>
      </form>
    );
  }
}
