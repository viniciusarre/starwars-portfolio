import React, { Component } from 'react';
import { Row, Col, Grid, Panel, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import mainLogo from'../logo_portfolio.png';
import profile from '../me.jpg';


class Semestres extends Component{
    constructor(){
        super();
        this.state = {
            semestres: [],
            loading: true,
            buscando: false,
            busca: ""
        };
    }

    componentDidMount(){

        console.log("FETCHING!! ");
        document.body.style.overflowY = "auto";

        axios.get("http://localhost:5000/episodios/")
            .then(ep=>{
                console.log("THEN");
                console.log("EP >> ", ep);
                let semestres = ep.data.semestre;
                this.setState({semestres:semestres, loading: false });
            }).catch(err=>{
            console.log("CATCH >> ", err);
        })
// axios.get("https://starwars-portfolio.herokuapp.com/episodios/")
//             .then(ep=>{
//                 console.log("EP >> ", ep);
//                 let semestres = ep.data.semestre;
//                 this.setState({semestres:semestres, loading: false });
//             })


    }



    render() {
        this.state.busca !== "" && console.log("Searching >> ", this.state.semestres.map(s=>s.materias.filter(m=>m.toLowerCase().includes(this.state.busca.toLowerCase())).length > 0 && s).filter(s=>s !== false));
        let { semestres } = this.state;
        console.log("Semestres", semestres)
        let filtrado = this.state.semestres.map(
            s=>(s.materias.filter(m=>m.toLowerCase().includes(this.state.busca.toLowerCase())).length > 0  ||
            s.subtitle.toLowerCase().includes(this.state.busca.toLowerCase())
            || s.title.toLowerCase().includes(this.state.busca.toLowerCase())) && s).filter(s=>s !== false);
        semestres = this.state.busca === "" ? semestres : filtrado;
        // console.log("PROPS >> ", this.props);
        const { Heading, Body, Footer } = Panel;
        return (
            <div className={" "}>

                <div className={"semester__title container"}>
                    <header className={"text-center"}>
                        <img src={mainLogo} alt={"star wars logo"}/>
                    </header>

                    {!this.state.loading && <div className={" text-center "} >
                        <Grid>
                            <Row>

                                <Col lg={6} sm={6}>
                                    <h1 style={{marginTop: '1em', marginBottom: '1em'}}>Episódios</h1>
                                </Col>
                                <Col lg={6} sm={6}>
                                    <div style={{marginTop: '1em', marginBottom: '1em'}}>
                                        {! this.state.buscando && <div onClick={(e)=>this.setState({buscando: true})}>Buscar</div>}
                                        {this.state.buscando && <input ref={node => this.node = node} type={"text"} autoFocus={true} onChange={(e)=> this.setState({busca: e.target.value})}/> }
                                    </div>
                                </Col>
                            </Row>
                        </Grid>
                        <Grid>
                            <Row >
                                <Col lg={12} md={12} >

                                    { semestres.length > 0 && semestres.sort((p, n)=>p.title.localeCompare(n.title)).map((s, i) =>
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

                                    {semestres.length === 0 &&
                                        <Col lg={12} md={6} key={"#notfound"}>


                                            <Panel>
                                                <Body>
                                                <Heading>
                                                    <span className={"text-bold"}>Semestre não encontrado!</span>
                                                </Heading>
                                                <span className={"text-left text-muted"}>Busque pelo título do semestre, ou matéria </span>
                                                </Body>


                                            </Panel>

                                        </Col>
                                    }
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12} >

                                    <div className="h-card">
                                            <h1>Sobre mim</h1>
                                            <div style={{padding:20}}>
                                                <div className={"text-center u-photo"}>
                                                    <img className={"avatar float-right"} alt={"foto do autor"} src={profile} style={{margin:20}}/>
                                                </div>
                                                Olá, meu nome é <span className="p-name">Vinícius Arré</span>, 
                                                tenho 21 anos e moro em <span className="p-locality">Fernandópolis, São Paulo</span>. 
                                                Trabalho como <span className="p-job-title">desenvolvedor full stack na startup </span>
                                                Taskeo (que está distribuída ao redor do mundo, 
                                                mas que o fundador se encontra no <span className="p-locality">Japão</span>). 
                                                <span className="p-note">
                                                    Gosto bastante de consumir conteúdos que possuam muita 
                                                    história, e meus hobbies são baseados nisso (ou seja, 
                                                    gosto de jogar, ler, ver filmes e séries etc.). 
                                                    Além disso, tenho uma curiosidade muito grande por idiomas, 
                                                    o que me leva a aprender vários.
                                                </span>
                                                <br/>
                                                Para entrar em contato, <a href="mailto:viniciusarre@gmail.com" className="u-email">envie-me um e-mail</a>
                                            </div>
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
