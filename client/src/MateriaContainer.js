import React from 'react';
import {Panel } from 'react-bootstrap';
import './App.css';
const MateriaContainer = ({materia})=>{
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
    return(
        <div>
            <Panel id={materia.nome_materia}>
                <Panel.Heading>
                    <Panel.Title toggle>
                        {materia.nome_materia}
                    </Panel.Title>
                    <Panel.Collapse>
                        <Panel.Body>
                            <small className={"text-muted"} style={{fontSize: '15px', lineHeight: '1'}}> {materia.descricao}</small>
                        </Panel.Body>
                        <Panel.Footer>
                            <a href={materia.link}  style={{fontSize: '15px', lineHeight: '1'}} target={"__blank"}> Saiba mais </a>
                        </Panel.Footer>
                    </Panel.Collapse>

                </Panel.Heading>
            </Panel>
        </div>
    )
};



export default MateriaContainer;