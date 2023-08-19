import React from "react";
import Table from 'react-bootstrap/Table';
import '../App.css';

const flights = (props) => {
    const flightData = props.flightData;
    const keys = Object.keys(flightData);
    return (
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <h2>Flight Based Delays</h2>
            <Table bordered id = "table1" class = "table table-bordered table-striped mb-0">
                <thead>
                    <tr>
                        <th>Airline</th>
                        <th>Slight Delay</th>
                        <th>Moderate Delay</th>
                        <th>Large Delay</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        keys.map(data_key => (
                        <tr>
                          <td>{flightData[data_key].combinedFlightNumber}</td>
                          <td>{flightData[data_key].slight_delays}</td>
                          <td>{flightData[data_key].moderate_delays}</td>
                          <td>{flightData[data_key].Large_delays}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    );
}
export default flights;