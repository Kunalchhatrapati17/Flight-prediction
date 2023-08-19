import React from "react";
import { PieChart } from 'react-minimal-pie-chart';
import '../App.css';

const graphs = (props) => {
    const graphData = props.graphData;
    const keys = Object.keys(graphData);
    let totalSum = 0, sumSlight = 0, sumMod = 0, sumLarge = 0;
    keys.forEach((key) => {
        sumSlight = sumSlight + Number(graphData[key].slight_delays);
        sumMod = sumMod + Number(graphData[key].moderate_delays);
        sumLarge = sumLarge + Number(graphData[key].Large_delays);
    });
    totalSum = sumSlight + sumMod + sumLarge;
    let avgSlight = (sumSlight/totalSum)*100;
    let avgMod = (sumMod/totalSum)*100;
    let avgLarge = (sumLarge/totalSum)*100;
    return (
        <div class="graph-custom-scrollbar">
            <h2>DELAY TYPES (RATIO)</h2>
            <PieChart data={[             { title: 'Large Delays', value: Math.round(avgLarge), color: '#FF0000' },             { title: 'Moderate Delays', value: Math.round(avgMod), color: '#FF6C00' },             { title: 'Small Delays', value: Math.round(avgSlight), color: '#FFE400' },            ]} radius = {30}
            label={(props) => { return props.dataEntry.value;}} labelStyle={{
                fontSize: "4px",
                fontColor: "FFFFFA",
                fontWeight: "200",
              }}/>
            <div style={{ position: 'absolute', top: 0, right: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#FFE400' }}></span>
                    <span style={{ marginLeft: '5px', fontSize: '14px' }}>Small Delays</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#FF6C00' }}></span>
                    <span style={{ marginLeft: '5px', fontSize: '14px' }}>Moderate Delays</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#FF0000' }}></span>
                    <span style={{ marginLeft: '5px', fontSize: '14px' }}>Large Delays</span>
                </div>
            </div>
        </div>
    );
}
export default graphs;
