import React from 'react';
import USAMap from './USAMap';

const AdultChart = () => {
    return (
        <div style={{width:"100vw", display:"flex", justifyContent:"space-evenly"}}>
            <div style={{width:"45vw", height:"25vh"}}>
                <USAMap />
            </div>
        <div style={{width: "25vw", verticalAlign:"center", alignSelf:"center", height: "50vh", maxHeight:800, overflowY:"scroll"}}>
            <h1 style={{fontSize:"1.3vw", textAlign:"justify", textJustify:"auto"}}>According to the 2022 study by <em style={{textDecoration:"underline"}}>Mental Health America</em>, approximately 19.86% of adults are experiencing some type of mental illness in the US. This map showcases the approximate number of people per state that suffer from a mental health disorder. The prevalence ranking associated with each state has been calculated based on a number of different factors. A lower ranking signifies a lesser prevalence of mental illness and higher rates of access to care for adults. A higher ranking signifies a greater prevalence of mental illness and lower rates of access to care. </h1>
        </div>

    </div>
    );
}

export default AdultChart;
