import React, { Component } from 'react';
import '../../content.css';
import CrawlComponent from "./CrawlComponent";
import {Link} from "react-router-dom";
import MateriaContainer from "../../MateriaContainer";
import { Row, Col, Grid } from 'react-bootstrap';
import mainLogo from'../../logo_portfolio.png';
export default class CrawlWrapper extends Component{
    constructor(props){
        super(props);
        this.state = {
            shouldSkip: false
        };

    }
    render() {
        const {title, subtitle, text, materias} = this.props.data;
        if(this.props.isCrawler && !this.state.shouldSkip){

            return (
                <Grid>
                    <Col lg={12} md={12} >
                        <div className={"flex"}>
                            <button onClick={()=>this.setState({shouldSkip : true})} className={"skip__btn"} >Pular</button>
                            <span className={"skip__btn__right"}>
                                <Link to={"/"}>
                                    <button  className={"skip__btn"}>
                                        Voltar
                                     </button>
                                 </Link>
                            </span>
                        </div>


                        <div style={{paddingTop: "2em"}}>
                            <CrawlComponent title={title} subtitle={subtitle} text={text}/>
                        </div>
                        <br/><br/><br/>
                    </Col>
                </Grid>
            )
        }else{
            return (
                <div className={" "}>

                    <div className={"semester__title container"}>
                        <header className={"text-center"}>
                            <Link to={"/"}>  <img src={mainLogo}  alt={"star wars logo"}/> </Link>
                        </header>

                        <div className={" text-center "} style={{overflow: "auto !important"}}>
                            <h1>Matérias</h1>
                            <Grid>
                                <Row >
                                    <Col lg={12} md={12} >
                                        {materias.sort((p,n)=>p.nome_materia.localeCompare(n.nome_materia)).map(m=>   <Col lg={4} md={4} sm={12} ><MateriaContainer materia={m} key={m.name}/>  </Col>)}
                                    </Col>
                                </Row>
                            </Grid>
                        </div>
                    </div>

                </div>
            )
        }

    }
};
