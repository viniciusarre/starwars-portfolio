import React, { Component } from "react";
import {
  Row,
  Col,
  Grid,
  Panel,
  Button,
  FormControl,
  Table
} from "react-bootstrap";
import md5 from "md5";
import axios from "axios";
import { Redirect } from "react-router";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      semestres: [],
      bio: []
    };
  }

  async componentDidMount() {
    let result = await axios.get(
      "https://starwars-portfolio.herokuapp.com/getSemesters"
    );
    console.log(result);
    this.setState({ semestres: result.data });
    result = await axios.get("https://starwars-portfolio.herokuapp.com/getBio");
    console.log(result);
    this.setState({ bio: result.data });
  }
  render() {
    // console.log("GET ITEM >> ", localStorage.getItem("loggedIn") === "true");
    return localStorage.getItem("loggedIn") !== "true" ? (
      <Redirect to="/admin/" />
    ) : (
      <Row>
        <h1 style={{ textAlign: "center" }}>Painel de Admin</h1>
        <Col lg={8} lgOffset={2} md={8} mdOffset={2}>
          <div style={{ marginTop: "5em", color: "white" }}>
            <h1 style={{ textAlign: "center" }}>Semestres</h1>
            <Table bordered condensed>
              <thead style={{ color: "#feda4a" }}>
                <tr>
                  {/* <th>#</th> */}
                  <th>Nome do Semestre</th>
                  <th colSpan="2">Ações</th>
                  {/* <th>Username</th> */}
                </tr>
              </thead>
              <tbody>
                {this.state.semestres
                  .sort((a, b) => a.crawlTitle.localeCompare(b.crawlTitle))
                  .map(semestre => (
                    <tr>
                      <td>{semestre.crawlTitle}</td>
                      <td>Editar</td>
                      <td>Excluir</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
          <div style={{ marginTop: "5em", color: "white" }}>
            <h1 style={{ textAlign: "center" }}>Perfil</h1>
            <Table bordered condensed>
              <thead style={{ color: "#feda4a" }}>
                <tr>
                  {/* <th>#</th> */}
                  <th>Perfil</th>
                  <th colSpan="2">Ações</th>
                  {/* <th>Username</th> */}
                </tr>
              </thead>
              <tbody>
                {this.state.bio.map(bio => (
                  <tr>
                    <td>{bio.title}</td>
                    <td>Editar</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    );
  }
}
