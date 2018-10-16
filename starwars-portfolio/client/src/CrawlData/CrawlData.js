import React from 'react';
import Crawl from 'react-star-wars-crawl';
import ScreenTest from '../ScreenTest';
import '../App.css';

const CrawlData = ({title, subtitle, text}) =>{
    return <div>
        {<Crawl title={title} subtitle={subtitle} text={text}/> || setTimeout(45) && <ScreenTest/>}
    </div>
};
export default CrawlData;

