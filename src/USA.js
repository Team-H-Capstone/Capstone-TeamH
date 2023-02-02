import React, {useLayoutEffect} from 'react';
import USAMap from 'react-usa-map'

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/xy";
import am5geodata_usaHigh from "@amcharts/amcharts5-geodata/usaHigh";

// const USA = () => {
  
//     return (
//       <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
//     );
//   }

//   export default USA;

const USA = () => {

    const mapHandler = (e) => {
        alert(e.target.dataset.name)
        console.log(e.target.dataset)
    }

    const stateFilling = () => {
        return {
            NJ: {
                fill: "navy",
                clickHandler: () => alert("New Jersey 9,000,000")
            },
            MI: {
                fill: "navy",
                clickHandler: () => alert("Michigan 9,000,000")
            }
        }
    }

    return (
        <div className="map">
            <USAMap customize={stateFilling()} onClick={mapHandler}/>
        </div>
    );
}

export default USA;