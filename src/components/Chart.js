import React from 'react';
import { Chart } from 'chart.js/auto';
import { Doughnut  } from "react-chartjs-2";

const data = {
    labels: ["Depression", "Anxiety Disorders", "Bipolar Disorder", "Eating Disorders", "Schizophrenia", "Alcohol Use Disorder", "Drug Use Disorder", "Other"],
    datasets: [{
        data:[264000000, 284000000, 46000000, 16000000, 20000000, 107000000, 71000000, 162000000],
        backgroundColor: ["#d82423", "#fba8c4", "#721312", "#977bbf", "#9ac4c0", "#831643", "#fbc8c0", "#fba8d9"]
    }]
}

const ChartOne = () => {
    return (
        <div style={{width:"90vw", display:"flex", justifyContent:"space-around"}}>
            <div style={{width: "25vw", verticalAlign:"center", alignSelf:"center", height: "70vh", maxHeight:800, overflowY:"scroll"}}>
                <h1 style={{fontSize:"1.3vw", textAlign:"justify", textJustify:"auto", }}>According to the <em style={{textDecoration:"underline"}}>Institute for Health Metrics and Evaluation</em> and reported in their flagship, <em style={{fontStyle:"italic"}}>Global Burden of Disease</em> study, in 2017 it was estimated that approximately 970 million people around the world lived with a mental health or substance abuse disorder. At the time, this would have accounted for nearly 13% of the world's population. The most prevalent of all mental health illnesses are depression and anxiety disorders.<em style={{fontStyle:"italic"}}>(A graphical representation of the data is provided.)</em></h1>
            </div>
            <div style={{width:"40vw"}}>
                <Doughnut data={data} options={{plugins: { legend: { labels: { font: { size: 20 }, color:"white", padding: 10, margin:0} } }}}/>
            </div>
        </div>
    );
}

export default ChartOne;