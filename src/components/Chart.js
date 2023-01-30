import React from 'react';
import { Chart } from 'chart.js/auto';
import { Doughnut  } from "react-chartjs-2";

const data = {
    labels: ["Depression", "Anxiety Disorders", "Bipolar Disorder", "Eating Disorders", "Schizophrenia", "Alcohol Use Disorder", "Drug Use Disorder"],
    datasets: [{
        data:[264000000, 284000000, 46000000, 16000000, 20000000, 107000000, 71000000],
        backgroundColor: ["#d82423", "#fba8c4", "#721312", "#977bbf", "#9ac4c0", "#831643", "#fbc8c0"]
    }]
}

const ChartOne = () => {
    return (
        <div style={{width:800}}>
            <h1 style={{fontSize:25, textAlign:"center"}}>According to the <em style={{fontStyle:"italic"}}>Institute for Health Metrics and Evaluation</em>, a study in 2017 estimated that around 970 million people around the world lived with a mental health or substance abuse disorder. At the time, this would have accounted for nearly 13% of the world's population.</h1>
            <br></br>
            <Doughnut data={data} options={{plugins: { legend: { labels: { font: { size: 20 }, color:"white", padding: 10} } }}}/>
        </div>
    );
}

export default ChartOne;