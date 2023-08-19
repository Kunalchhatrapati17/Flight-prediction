import React from "react";
import Table from 'react-bootstrap/Table';
import '../App.css';

const cancellations = (props) => {
    const cancelData = props.cancelData;
    const keys = Object.keys(cancelData);
    return (
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
            <h2>Flight Cancellations</h2>
            <Table bordered id = "table1" class = "table table-bordered table-striped mb-0">
                <thead>
                    <tr>
                        <th>Flight Code</th>
                        <th>Number of Cancellations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        keys.map(data_key => (
                        <tr>
                          <td>{cancelData[data_key].combinedFlightNumber}</td>
                          <td>{cancelData[data_key].total_cancellations}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    );
}
export default cancellations;