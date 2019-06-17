import React, { Component } from "react";
import Axios from "axios";
import {
  Row,
  Col,
  Grid,
  Panel,
  Button,
  FormControl,
  Table
} from "react-bootstrap";
import { Redirect } from "react-router";
import MateriaModal from "./MateriaModal";
import {Link} from "react-router-dom";
import mainLogo from "../../logo_portfolio.png";

export default class SemesterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      crawlText: "",
      crawlTitle: "",
      crawlSubtitle: "",
      materias: [],
      num: 0,
      isModalOpen: false,
      materia: {},
      index: -1
    };
  }

  handleMateriaChange(index, materia) {
    console.log("INDEX MATERIA >> ", index, materia);
    let materias = this.state.materias;
    if (index === -1) {
      materias.push(materia);
    } else {
      materias[index] = materia;
    }
    this.setState({ materias });
  }

  componentDidMount() {
    if (this.props.semestre !== undefined) {
      const {
        _id,
        crawlSubtitle,
        crawlText,
        crawlTitle,
        materias,
        num
      } = this.props.semestre;
      this.setState({ _id, crawlSubtitle, crawlText, crawlTitle, materias, num });
    }
  }
  async saveSemester() {
    if (this.state._id === "") {
      let response = await Axios.get(
        "https://starwars-portfolio.herokuapp.com/getSemesters"
      );
      let num = response.data.length + 1;
      let result = await Axios.post(
        "https://starwars-portfolio.herokuapp.com/createSemester",
        {
          num,
          crawlTitle: this.state.crawlTitle,
          crawlSubtitle: this.state.crawlSubtitle,
          crawlText: this.state.crawlText,
          materias: this.state.materias
        }
      );
      console.log(result);
      this.setState({ saved: true });
    } else {
      let result = await Axios.post(
        "https://starwars-portfolio.herokuapp.com/updateSemester",
        {
          _id: this.state._id,
          num: this.state.num,
          crawlTitle: this.state.crawlTitle,
          crawlSubtitle: this.state.crawlSubtitle,
          crawlText: this.state.crawlText,
          materias: this.state.materias
        }
      );
      this.setState({ saved: true });
      console.log(result);
    }
  }
  render() {
    // console.log("THIS>PROPS >> ", this.props);
    return !this.state.saved ? (
      <form> 
      
        <header className={"text-center"}>
            <Link to={"/admin/home"}>  <img src={mainLogo}  alt={"star wars logo"}/> </Link>
        </header>
        <Col lg={8} lgOffset={2} md={8} mdOffset={2}>
    
          <h1 style={{ textAlign: "center" }}>Informações do Semestre</h1>
          <br />
          Crawl Title :{" "}
          <FormControl
            onChange={e => this.setState({ crawlTitle: e.target.value })}
            value={this.state.crawlTitle}
          />
          Crawl Subtitle:{" "}
          <FormControl
            onChange={e => this.setState({ crawlSubtitle: e.target.value })}
            value={this.state.crawlSubtitle}
          />
          Crawl Text:{" "}
          <FormControl
            componentClass="textarea"
            rows="5"
            onChange={e => this.setState({ crawlText: e.target.value })}
            value={this.state.crawlText}
          />
          <div>
            <h1 style={{ textAlign: "center" }}>Matérias</h1>
            <Button
              bsStyle="primary"
              bsSize="large"
              style={{ marginTop: 10, marginBottom: 10 }}
              onClick={() =>
                this.setState({
                  isModalOpen: true,
                  materia: {},
                  adicionando: true,
                  index: -1
                })
              }
              // onClick={() => this.saveSemester()}
            >
              Adicionar Matéria
            </Button>
            <Table bordered condensed>
              <thead style={{ color: "#feda4a" }}>
                <tr>
                  {/* <th>#</th> */}
                  <th>Nome da Matéria</th>
                  <th colSpan="2">Ações</th>
                  {/* <th>Username</th> */}
                </tr>
              </thead>
              <tbody>
                {this.state.materias
                  // .sort((a, b) => a.name.localeCompare(b.name))
                  .map((materia, index) => (
                    <tr key={materia._id + materia.link}>
                      <td>{materia.nome_materia}</td>
                      <td
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          this.setState({
                            isModalOpen: true,
                            materia: materia,
                            adicionando: false,
                            index
                          })
                        }
                      >
                        Editar
                      </td>
                      {/* <td
                        style={{ cursor: "pointer" }}
                        // onClick={() => this.handleDelete(semestre._id)}
                      >
                        Excluir
                      </td> */}
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
          <Button
            bsStyle="primary"
            bsSize="large"
            block
            style={{ marginTop: 10 }}
            onClick={() => this.saveSemester()}
          >
            Salvar
          </Button>
        </Col>
        <MateriaModal
          materia={this.state.materia}
          closeModal={() => this.setState({ isModalOpen: false })}
          openModal={() => this.setState({ isModalOpen: true })}
          modalIsOpen={this.state.isModalOpen}
          adicionando={this.state.adicionando}
          index={this.state.index}
          saveMateria={(index, materia) =>
            this.handleMateriaChange(index, materia)
          }

          // refreshBio={() => this.refreshBio()}
        />
      </form>
    ) : (
      <Redirect to="/admin/home" />
    );
  }
}
