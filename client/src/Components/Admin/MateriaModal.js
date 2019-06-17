import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Col, Button, FormControl } from "react-bootstrap";
import axios from "axios";

const customStyles = {
  content: {
    width: "100vh",
    left: "25%"
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)"
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement("#bioModal");

export default class MateriaModal extends React.Component {
  constructor() {
    super();
    this.state = {
      nome_materia: "",
      descricao: "",
      link: ""
    };
    // this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps && prevProps.materia !== this.props.materia) {
      this.setState({
        nome_materia: this.props.materia.nome_materia,
        descricao: this.props.materia.descricao,
        link: this.props.materia.link
      });
    }
  }

  openModal() {
    this.props.openModal();
  }

  async saveMateria() {
    this.props.saveMateria({
      nome_materia: this.state.nome_materia,
      descricao: this.state.descricao,
      link: this.state.link
    });
    this.props.closeModal();
  }

  //   afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     this.subtitle.style.color = "#f00";
  //   }

  closeModal() {
    this.props.closeModal();
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.modalIsOpen}
          //   onAfterOpen={this.afterOpenModal}
          onRequestClose={() => this.props.closeModal()}
          style={customStyles}
          //   contentLabel="Editar Perfil"
        >
          {/* <h2 ref={subtitle => (this.subtitle = subtitle)}>Editan</h2> */}

          <form>
            <Col lg={12}>
              <Button bsStyle="warning" onClick={() => this.closeModal()}>
                Fechar
              </Button>{" "}
              <br />
              Nome :{" "}
              <FormControl
                onChange={e => this.setState({ nome_materia: e.target.value })}
                value={this.state.nome_materia}
              />
              Descrição:{" "}
              <FormControl
                onChange={e => this.setState({ descricao: e.target.value })}
                value={this.state.descricao}
              />
              Link:{" "}
              <FormControl
                onChange={e => this.setState({ link: e.target.value })}
                value={this.state.link}
              />
              <Button
                bsStyle="primary"
                bsSize="large"
                block
                style={{ marginTop: 10 }}
                onClick={() => this.saveMateria()}
              >
                Salvar
              </Button>
            </Col>
          </form>
        </Modal>
      </div>
    );
  }
}
