import React from "react";
import Table from 'react-bootstrap/Table';
import '../App.css';

const allFlight = (props) => {
    const allData = props.allData;
    const keys = Object.keys(allData);
    return (
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <h2>Flight Details</h2>
            <Table bordered id = "table1" class = "table table-bordered table-striped mb-0">
                <thead>
                    <tr>
                        <th>Flight Code</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        keys.map(data_key => (
                        <tr>
                          <td>{allData[data_key].Code}</td>
                          <td>{allData[data_key].Description}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    );
}
export default allFlight;