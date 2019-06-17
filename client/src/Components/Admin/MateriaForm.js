import React, { Component } from "react";

export default class SemesterForm extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      nome:
        props.materia.nome_materia !== undefined
          ? ""
          : props.materia.nome_materia !== undefined,
      desc:
        props.materia.descricao !== undefined
          ? ""
          : props.materia.descricao !== undefined,
      link:
        props.materia.link !== undefined ? "" : props.materia.link !== undefined
    };
  }
  render() {
    return (
      <form>
        <Col lg={12}>
          <Button bsStyle="warning" onClick={() => this.closeModal()}>
            Fechar
          </Button>{" "}
          <br />
          Nome :{" "}
          <FormControl
            onChange={e => this.setState({ nome: e.target.value })}
            value={this.state.title}
          />
          Descrição:{" "}
          <FormControl
            onChange={e => this.setState({ desc: e.target.value })}
            value={this.state.text}
          />
          Link:{" "}
          <FormControl
            onChange={e => this.setState({ link: e.target.value })}
            value={this.state.text}
          />
          <Button
            bsStyle="primary"
            bsSize="large"
            block
            style={{ marginTop: 10 }}
            onClick={() => this.saveBio()}
          >
            Salvar
          </Button>
        </Col>
      </form>
    );
  }
}
