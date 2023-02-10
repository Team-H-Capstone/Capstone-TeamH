import React, { useLayoutEffect } from 'react';

import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import am5geodata_usaHigh from "@amcharts/amcharts5-geodata/usaHigh";
import * as am5plugins_exporting from "@amcharts/amcharts5/plugins/exporting";

const USA = () => {

  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    let chart = root.container.children.push( 
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "rotateY",
        projection: am5map.geoAlbersUsa(),
        layout: root.horizontalLayout,
      }) 
    );

    let polygonSeries = chart.series.push(am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_usaHigh,
        valueField: "value",
        calculateAggregates: true
      }));

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{rank}: {name} - {value}"
      });

      polygonSeries.set("heatRules", [{
        target: polygonSeries.mapPolygons.template,
        dataField: "value",
        min: am5.color(0x7EC8E3),
        max: am5.color(0x000C66),
        key: "fill"
      }]);

      polygonSeries.mapPolygons.template.events.on("pointerover", function(ev) {
        heatLegend.showValue(ev.target.dataItem.get("value"));
      });

      polygonSeries.data.setAll([
        { id: "US-AL", value: 794000, rank: "31st" },
        { id: "US-AK", value: 113000, rank: "33rd" },
        { id: "US-AZ", value: 1099000, rank: "18th" },
        { id: "US-AR", value: 460000, rank: "23rd" },
        { id: "US-CA", value: 5864000, rank: "15th" },
        { id: "US-CO", value: 1014000, rank: "46th" },
        { id: "US-CT", value: 526000, rank: "10th" },
        { id: "US-DE", value: 157000, rank: "28th" },
        { id: "US-FL", value: 2903000, rank: "3rd" },
        { id: "US-GA", value: 1406000, rank: "6th" },
        { id: "US-HI", value: 185000, rank: "4th" },
        { id: "US-ID", value: 293000, rank: "40th" },
        { id: "US-IL", value: 1858000, rank: "11th" },
        { id: "US-IN", value: 1125000, rank: "37th" },
        { id: "US-IA", value: 441000, rank: "8th" },
        { id: "US-KS", value: 442000, rank: "26th" },
        { id: "US-KY", value: 762000, rank: "42nd" },
        { id: "US-LA", value: 734000, rank: "30th" },
        { id: "US-ME", value: 238000, rank: "35th" },
        { id: "US-MD", value: 810000, rank: "5th" },
        { id: "US-MA", value: 1157000, rank: "29th" },
        { id: "US-MI", value: 1571000, rank: "22nd" },
        { id: "US-MN", value: 876000, rank: "25th" },
        { id: "US-MS", value: 446000, rank: "19th" },
        { id: "US-MO", value: 1056000, rank: "44th" },
        { id: "US-MT", value: 171000, rank: "27th" },
        { id: "US-NE", value: 290000, rank: "21st" },
        { id: "US-NV", value: 512000, rank: "34th" },
        { id: "US-NH", value: 243000, rank: "38th" },
        { id: "US-NJ", value: 1122000, rank: "1st" },
        { id: "US-NM", value: 338000, rank: "32nd" },
        { id: "US-NY", value: 2972000, rank: "16th" },
        { id: "US-NC", value: 1532000, rank: "12th" },
        { id: "US-ND", value: 116000, rank: "24th" },
        { id: "US-OH", value: 2112000, rank: "48th" },
        { id: "US-OK", value: 657000, rank: "41st" },
        { id: "US-OR", value: 783000, rank: "49th" },
        { id: "US-PA", value: 1963000, rank: "17th" },
        { id: "US-RI", value: 187000, rank: "39th"},
        { id: "US-SC", value: 760000, rank: "14th" },
        { id: "US-SD", value: 118000, rank: "7th" },
        { id: "US-TN", value: 1006000, rank: "13th" },
        { id: "US-TX", value: 3602000, rank: "2nd"},
        { id: "US-UT", value: 599000, rank: "51st" },
        { id: "US-VT", value: 112000, rank: "36th" },
        { id: "US-VA", value: 1199000, rank: "9th" },
        { id: "US-WA", value: 1360000, rank: "47th" },
        { id: "US-WV", value: 347000, rank: "50th" },
        { id: "US-WI", value: 904000, rank: "20th" },
        { id: "US-WY", value: 98000, rank: "43rd" },
        { id: "US-DC", value: 129000, rank: "45th"}
      ]);

      let heatLegend = chart.children.push(am5.HeatLegend.new(root, {
        orientation: "vertical",
        startColor: am5.color(0x7EC8E3),
        endColor: am5.color(0x000C66),
        startText: "Lowest",
        endText: "Highest",
        stepCount: 5,
        height: 150
      }));

      heatLegend.startLabel.setAll({
        fontSize: 15,
        fontWeight: "bold",
        fill: heatLegend.get("startColor")
      });

      heatLegend.endLabel.setAll({
        fontSize: 15,
        fontWeight: "bold",
        fill: heatLegend.get("endColor")
      });

      polygonSeries.events.on("datavalidated", function () {
        heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
        heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
      });

      // // Create a export menu to download the chart
      // let exporting = am5plugins_exporting.Exporting.new(root, {
      //   menu: am5plugins_exporting.ExportingMenu.new(root, {})
      // });
      
      // // Export chart as PNG
      // exporting.export("png", function(data) {
      //   // Create an image element and set the source to the data URL
      //   let img = document.createElement("img");
      //   img.src = data;
      
      //   // Add the image to the page
      //   document.body.appendChild(img);
      // });

    return () => {
      root.dispose();
    };
  }, []);


  return (
    <div id="chartdiv" style={{ width: "45vw", height: "45vh"}}></div>
  );
}
export default USA;