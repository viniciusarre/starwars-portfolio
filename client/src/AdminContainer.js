import React, { Component } from "react";
import Login from "./Components/Admin/Login";
import { Redirect } from "react-router";

export default class AdminContainer extends Component {
  constructor() {
    super();
    this.state = {};
  }
  // admin
  // S66sg5sbDRVgJUh
  componentDidMount() {
    // window.scrollTo(0, -200);
    document.body.style.overflowY = "hidden";
    // console.log("PROPS >> ", this.props);
    let num = this.props.match.params.num;
    // let link = "https://starwars-portfolio.herokuapp.com/semestre?num=" + num;
    // console.log(link);
    // axios
    //   .get(link)
    //   .then(result => {
    //     console.log("RESULT >> ", result);
    //     result = result.data;
    //     if (result.success) {
    //       console.log(
    //         (result.semestre.crawlText.length +
    //           result.semestre.crawlTitle.length +
    //           result.semestre.crawlSubtitle.length) *
    //           10000
    //       );
    //       let length =
    //         (result.semestre.crawlText.length +
    //           result.semestre.crawlTitle.length +
    //           result.semestre.crawlSubtitle.length) *
    //         1000;
    //       this.setState({
    //         title: result.semestre.crawlTitle,
    //         subtitle: result.semestre.crawlSubtitle,
    //         text: result.semestre.crawlText,
    //         length,
    //         materias: result.semestre.materias
    //       });
    //     } else {
    //       window.location.reload();
    //     }
    //   })
    //   .catch(err => {
    //     console.log("ERROR ", err);
    //   });
  }

  render() {
    // const { title, subtitle, text, materias } = this.state;
    // let data = { title, subtitle, text, materias };
    // setTimeout(() => this.setState({ isCrawler: false }), 60000);
    return localStorage.getItem("loggedIn") === "true" ? (
      <Redirect to="/admin/home" />
    ) : (
      <Login />
    );
  }
}
