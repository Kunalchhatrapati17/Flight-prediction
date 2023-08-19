import './App.css';
import React, { useState } from 'react';
import AllFlights from './Tables/allFlight';
import Flights from './Tables/flights';
import Cancellations from './Tables/cancellations';
import Graphs from './Tables/graphs';
import Papa from 'papaparse';
import cancel from './DataFiles/cancellations.csv';
import combined from './DataFiles/combined.csv';
import airlines from './DataFiles/airlines.csv';

function App() {
  const [useComp, setComp] = useState();
  var renderedComp;

  const thisComp = (vals, comp) => {
    Papa.parse( comp, {
      header: true,
      delimiter: ',',
      download: true,
      complete: function (input) {
        console.log(input);
        if (vals === "flight")
          renderedComp = <Flights flightData = {input.data} />
        else if (vals === "allflight")
          renderedComp = <AllFlights allData = {input.data} />
        else if (vals === "cancel")
          renderedComp = <Cancellations cancelData = {input.data} />
        else
          renderedComp = <Graphs graphData = {input.data} />
        setComp(renderedComp);
      },
      error: err => console.log("ERROR", err)
    } );
  }
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div id ="heading">
          <h1>AirStat - Flight Status Informatics</h1>
        </div>
      </nav>
      <div class="container-fluid h-100">
        <div class="row h-100">
            <div class="col-2" id="green">
                <ul class="nav nav-pills flex-column mb-auto">
                  <li class = "nav-item">
                    <a href="#" onClick={() => thisComp("flight", combined)}><h5>Flight Based Delays</h5></a>
                  </li>
                  <li class = "nav-item">
                    <a href="#"onClick={() => thisComp("graph", combined)}><h5>Chart</h5></a>
                  </li>
                  <li class = "nav-item">
                    <a href="#"onClick={() => thisComp("allflight", airlines)}><h5>Current Flights</h5></a>
                  </li>
                  <li class = "nav-item">
                    <a href="#"onClick={() => thisComp("cancel",cancel)}><h5>Flight Cancellations</h5></a>
                  </li>
                </ul>
            </div>
            <div class="col-10">
              {useComp}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
