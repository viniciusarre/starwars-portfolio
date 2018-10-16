import React from 'react';
import * as data from './CrawlData/data';
import CrawlData from './CrawlData/CrawlData';

const App = () =>{
 
    const {title, subtitle, text} = data;
    return(
        <CrawlData title={title} subtitle={subtitle} text={text}>First Semester Data</CrawlData>);


};

export default App;