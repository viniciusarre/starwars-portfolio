import React, { Component } from 'react';
import { Row, Col, Grid, Panel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import mainLogo from'../logo_portfolio.png';
import profile from '../me.jpg';


class Semestres extends Component{
    constructor(){
        super();
        this.state = {
            semestres: [],
            loading: true
        };

    }

    componentWillMount(){
        document.body.style.overflowY = "auto";
        axios.get("https://starwars-portfolio.herokuapp.com/episodios/")
            .then(ep=>{
                console.log("EP >> ", ep);
                let semestres = ep.data.semestre;
                this.setState({semestres:semestres, loading: false });
            })


    }



    render() {

        const { semestres } = this.state;
        // console.log("PROPS >> ", this.props);
        const { Heading, Body, Footer } = Panel;
        return (
            <div className={" "}>

                <div className={"semester__title container"}>
                    <header className={"text-center"}>
                        <img src={mainLogo} alt={"star wars logo"}/>
                    </header>

                    {!this.state.loading &&  <div className={" text-center "} >
                        <h1 style={{marginTop: '1em', marginBottom: '1em'}}>Episódios</h1>
                        <Grid>
                            <Row >
                                <Col lg={12} md={12} >

                                    {semestres.sort((p, n)=>p.title.localeCompare(n.title)).map((s, i) =>
                                        <Col lg={6} md={3} key={"#" + s.title}>


                                                <Panel>
                                                    <Body>
                                                        <Heading>
                                                            <span className={"text-bold"}>{s.title}</span>
                                                        </Heading>
                                                        <span className={"text-left text-muted"}> {s.subtitle} </span>
                                                    </Body>
                                                    <Footer>
                                                        {i<5 &&  <Link to={"/semestre/" + (i + 1)}>
                                                            <small> Abrir </small>
                                                        </Link>}
                                                        {i === 5 &&
                                                        <a className="btn disabled" style={{fontSize: '0.7em'}}>Continua...</a>}
                                                    </Footer>

                                                </Panel>

                                        </Col>
                                    )}
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12} >
                                    <h1>Sobre mim</h1>
                                    <div style={{padding:20}}>
                                        <div className={"text-center"}>
                                            <img className={"avatar float-right"} alt={"foto do autor"} src={profile} style={{margin:20}}/>
                                        </div>
                                        Olá, meu nome é Vinícius Arré, tenho 21 anos e moro em Fernandópolis, São Paulo. Trabalho como desenvolvedor full stack na startup Taskeo (que está distribuída ao redor do mundo, mas que o fundador se encontra no Japão). Gosto bastante de consumir conteúdos que possuam muita história, e meus hobbies são baseados nisso (ou seja, gosto de jogar, ler, ver filmes e séries etc.). Além disso, tenho uma curiosidade muito grande por idiomas, o que me leva a aprender vários.
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                    </div>}
                    {this.state.loading && <h1 className={"text-center"}>A força estará contigo em um minuto... </h1> }
                </div>

            </div>
        );
    }
};

export default Semestres;
