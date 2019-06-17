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

export default class SemesterForm extends Component {
  constructor(props) {
    super(props);
    this.state =
      props.semestre !== undefined
        ? {
            _id: props.semestre._id === undefined ? "" : props.semestre._id,
            crawlText:
              props.semestre.crawlText === undefined
                ? ""
                : props.semestre.crawlText,
            crawlSubtitle:
              props.semestre.crawlSubtitle === undefined
                ? ""
                : props.semestre.crawlSubtitle,
            crawlTitle:
              props.semestre.crawlTitle === undefined
                ? ""
                : props.semestre.crawlTitle,
            materias:
              props.semestre.materias === undefined
                ? []
                : props.semestre.materias,
            num: 0
          }
        : {
            _id: "",
            crawlText: "",
            crawlTitle: "",
            crawlSubtitle: "",
            materias: [],
            num: 0
          };
  }

  handleMateriaChange(index, materia) {
    let materias = this.state.materias;
    if (index === -1) {
      materias.push(materia);
    } else {
      materias[index] = materia;
    }
    this.setState({ materias });
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
          crawlText: this.state.crawlText,
          crawlSubtitle: this.state.crawlSubtitle,
          crawlText: this.state.crawlText,
          materias: this.state.materias
        }
      );
      console.log(result);
    }
  }
  render() {
    return !this.state.saved ? (
      <form>
        <Col lg={12}>
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
              style={{ marginTop: 10 }}
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
                  .sort((a, b) => a.name.localeCompare(b.crawlTitle))
                  .map(materia => (
                    <tr key={materia._id + materia.link}>
                      <td>{materia.name}</td>
                      <td
                        style={{ cursor: "pointer" }}
                        // onClick={() =>
                        //   this.setState({
                        //     editSemester: true,
                        //     semester_id: semestre._id
                        //   })
                        // }
                      >
                        Editar
                      </td>
                      <td
                        style={{ cursor: "pointer" }}
                        // onClick={() => this.handleDelete(semestre._id)}
                      >
                        Excluir
                      </td>
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
      </form>
    ) : (
      <Redirect to="/admin/home" />
    );
  }
}
