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
import BioModal from "./BioModal";
import mainLogo from "../../logo_portfolio.png";
import {Link} from "react-router-dom";

const customStyles = {
  content: {
    width: "100vh"
  }
};
export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      semestres: [],
      bio: [],
      isModalOpen: false,
      editSemester: false,
      semester_id: "new",
      loggedOut: false
    };
  }
  async refreshBio() {
    let result = await axios.get(
      "https://starwars-portfolio.herokuapp.com/getBio"
    );
    console.log(result);
    this.setState({ bio: result.data });
  }

  async handleDelete(_id) {
    console.log("HANDLE DELETE > ", _id);
    let request = await axios.post(
      "https://starwars-portfolio.herokuapp.com/deleteSemester",
      {
        _id: _id
      }
    );
    let result = await axios.get(
      "https://starwars-portfolio.herokuapp.com/getSemesters"
    );
    console.log(result);
    this.setState({ semestres: result.data });
  }

  logOut(){
    this.setState({loggedOut: true});
    localStorage.setItem("loggedIn", false)
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
    let bio = this.state.bio[0] === undefined ? [] : this.state.bio[0];
    // console.log("GET ITEM >> ", localStorage.getItem("loggedIn") === "true");
    return localStorage.getItem("loggedIn") !== "true" ? (
      <Redirect to="/admin/" />
    ) : this.state.editSemester === true ? (
      <Redirect to={"/admin/semestre/" + this.state.semester_id} />
    ) : (
      <div>
        <header className={"text-center"}>
            <Link to={"/"}>  <img src={mainLogo}  alt={"star wars logo"}/> </Link>
        </header>
        <Row>
          
        {/* <Col lg={8} lgOffset={2} md={8} mdOffset={2}> */}
     
        
          {/* </Col> */}
          <Col lg={8} lgOffset={2} md={8} mdOffset={2}>
            <div>
              <h1 style={{ textAlign: "center" }}>Painel de Admin</h1>
             
            </div>
            <div style={{ marginTop: "5em", color: "white" }}>
              <h1 style={{ textAlign: "center" }}>Semestres</h1>
              <Button
                    bsStyle="danger"
                    bsSize="large"
               
                    style={{marginRight: 30, float: "right" }}
                    onClick={  ()=>this.logOut()}
                  >
                  Sair
              </Button>
              <Button
                bsStyle="primary"
                bsSize="large"
                style={{ marginTop: 10, marginBottom: 10, textAlign: "right" }}
                onClick={() =>
                  this.setState({ editSemester: true, semester_id: "new" })
                }
              >
                Adicionar Semestre
              </Button>
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
                      <tr key={semestre._id}>
                        <td>{semestre.crawlTitle}</td>
                        <td
                          style={{ cursor: "pointer" }}
                          onClick={() =>
                            this.setState({
                              editSemester: true,
                              semester_id: semestre._id
                            })
                          }
                        >
                          Editar
                        </td>
                        <td
                          style={{ cursor: "pointer" }}
                          onClick={() => this.handleDelete(semestre._id)}
                        >
                          Excluir
                        </td>
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
                    <tr key={bio._id}>
                      <td>{bio.title}</td>
                      <td
                        onClick={() => this.setState({ isModalOpen: true })}
                        style={{ cursor: "pointer" }}
                      >
                        Editar
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div id="bioModal">
                <BioModal
                  bio={bio}
                  closeModal={() => this.setState({ isModalOpen: false })}
                  openModal={() => this.setState({ isModalOpen: true })}
                  modalIsOpen={this.state.isModalOpen}
                  refreshBio={() => this.refreshBio()}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
