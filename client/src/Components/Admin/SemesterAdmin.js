import React, { Component } from "react";
import Axios from "axios";
import SemesterForm from "./SemesterForm";

export default class SemesterAdmin extends Component {
  constructor() {
    super();
    this.state = {
      _id: "",
      crawlSubtitle: "",
      crawlTitle: "",
      crawlText: "",
      materias: []
      //   _id: props.semester._id !== undefined ? props.semester._id : "",
      //   crawlTitle:
      //     props.semester.crawlTitle !== undefined
      //       ? props.semester.crawlTitle
      //       : "",
      //   crawlSubtitle:
      //     props.semester.crawlSubtitle !== undefined
      //       ? props.semester.crawlSubtitle
      //       : "",
      //   crawlText:
      //     props.semester.crawlText !== undefined ? props.semester.crawlText : ""
    };
  }

  async componentDidMount() {
    let link = this.props.match.params.semester_id;
    if (link !== "new") {
      try {
        let request = await Axios.post(
          "https://starwars-portfolio.herokuapp.com/getSemesterById",
          {
            _id: link
          }
        );
        let semester = request.data;
        console.log("SEMESTER >> ", semester);
        this.setState({
          _id: semester._id,
          crawlSubtitle: semester.crawlSubtitle,
          crawlTitle: semester.crawlTitle,
          crawlText: semester.crawlText,
          materias: semester.materias,
          num: semester.num
        });
      } catch (err) {
        console.log("ERR", err);
      }
    } else {
      let request = await Axios.get(
        "https://starwars-portfolio.herokuapp.com/getSemesters"
      );
      this.setState({ number: request.data.length + 1 });
    }
  }
  render() {
    console.log(
      "state >> ",
      this.state._id,
      this.state.crawlSubtitle,
      this.state.crawlText,
      this.state.crawlTitle
    );
    let link = this.props.match.params.semester_id;
    console.log("PROPS >>  ", this.props);
    console.log("LINK >>  ", link);
    return link === "new" ? (
      <div>
        <SemesterForm />
      </div>
    ) : (
      <div>
        Hello world!
        <div>Hello world!</div>
      </div>
    );
  }
}
