import React, { Component } from 'react';
import '../../content.css';
class CrawlComponent  extends Component{
    constructor(props){
        super(props);
        this.state = {
            shouldSkip: false,
            isFade: true
        };
        // document.body.className = "overflow";
    }
    render() {
        const {title, subtitle, text} = this.props;
            // setTimeout(()=>this.setState({isFade: false}), 5000 );
        return (
            <div className={""}>

                {/*{this.state.isFade && <div className="fade"></div>}*/}

                <section className="star-wars">

                    <div className="crawl ">

                        <div className="title">
                            <p>{title}</p>
                            <h1>{subtitle}</h1>
                        </div>

                        {/*<p>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first*/}
                        {/*victory against the evil Galactic Empire.</p>*/}
                        {/*<p>During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the*/}
                        {/*DEATH STAR, an armored space station with enough power to destroy an entire planet.</p>*/}
                        {/*<p>Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian*/}
                        {/*of the stolen plans that can save her people and restore freedom to the galaxy…</p>*/}
                        <div className={"craw__text"}>{text}</div>
                    </div>

                </section>
            </div>
        )
    }
};
export default CrawlComponent;