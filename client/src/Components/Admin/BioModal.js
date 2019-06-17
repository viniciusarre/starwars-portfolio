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

export default class BioModal extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      text: ""
    };
    // this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps && prevProps.bio !== this.props.bio) {
      this.setState({ title: this.props.bio.title, text: this.props.bio.text });
    }
  }

  openModal() {
    this.props.openModal();
  }

  async saveBio() {
    await axios.post("https://starwars-portfolio.herokuapp.com/updateBio", {
      _id: this.props.bio._id,
      title: this.state.title,
      text: this.state.text
    });
    this.props.refreshBio();
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
          contentLabel="Editar Perfil"
        >
          {/* <h2 ref={subtitle => (this.subtitle = subtitle)}>Editar Perfil</h2> */}

          <form>
            <Col lg={12}>
              <h1 style={{ color: "black", textAlign: "center" }}>
                Editando perfil
              </h1>
              <Button bsStyle="warning" onClick={() => this.closeModal()}>
                Fechar
              </Button>{" "}
              <br />
              Título:{" "}
              <FormControl
                onChange={e => this.setState({ title: e.target.value })}
                value={this.state.title}
              />
              Corpo:{" "}
              <FormControl
                componentClass="textarea"
                rows="5"
                onChange={e => this.setState({ email: e.target.value })}
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
        </Modal>
      </div>
    );
  }
}
