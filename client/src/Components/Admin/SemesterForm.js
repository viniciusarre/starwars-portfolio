import React, { Component } from "react";
import Axios from "axios";

export default class SemesterForm extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
      crawlText: "",
      crawlSubtitle: "",
      crawlTitle: "",
      materias: []
      //   nome:
      //     props.materia.nome_materia !== undefined
      //       ? ""
      //       : props.materia.nome_materia !== undefined,
      //   desc:
      //     props.materia.descricao !== undefined
      //       ? ""
      //       : props.materia.descricao !== undefined,
      //   link:
      //     props.materia.link !== undefined ? "" : props.materia.link !== undefined
    };
  }

  async saveSemester() {
    if (this.state._id === "") {
      // let result = await Axios.post
    } else {
    }
  }
  render() {
    return (
      <form>
        <Col lg={12}>
          <Button bsStyle="warning" onClick={() => this.closeModal()}>
            Fechar
          </Button>{" "}
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
            onChange={e => this.setState({ crawlText: e.target.value })}
            value={this.state.crawlText}
          />
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
    );
  }
}
