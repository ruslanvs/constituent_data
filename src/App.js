import React, { useState } from 'react'
import './App.css';
import { CSVLoader } from './CSVLoader'

const columns = ['email', 'firstName', 'lastName', 'zipCode'];
const columnHeaders = {
  email: 'Email',
  firstName: 'Fist Name',
  lastName: 'Last Name',
  zipCode: 'Zip Code',
}

function App() {
  const [constituentsRaw, setConstituentsRaw] = useState([]);
  const [csvImportError, setCsvImportError] = useState(null);

  const constituents = [];
  // Omitting the 0th member with header row
  for (let i = 1; i < constituentsRaw.length; i++) {
    // Converting array of arrays with records into an array of objects since data consumed from
    // a DB would likely come as an array of objects
    const constituentData = constituentsRaw[i].data;
    constituents.push({
      email: constituentData[0],
      firstName: constituentData[1],
      lastName: constituentData[2],
      zipCode: constituentData[3],
    })
  };

  return (
    <>
      <CSVLoader
        setData={setConstituentsRaw}
        setError={setCsvImportError}
      />
      {/* TODO: test error handing functionality */}
      {csvImportError &&
        (<div>
          {csvImportError.err} {csvImportError.reason}
        </div>)}
      <h1>Constituents</h1>
      <table>
        <thead>
          <tr>
            {columns.map((column) => <th key={column}>{columnHeaders[column]}</th>)}
          </tr>
        </thead>
        <tbody>
          {constituents.map((constituent) => ConstituentRow(constituent))}
        </tbody>
      </table>
    </>
  );
}

function ConstituentRow({ email, firstName, lastName, zipCode }) {
  return (
    <tr key={email + firstName + lastName + zipCode}>
      <td>
        {email}
      </td>
      <td>
        {firstName}
      </td>
      <td>
        {lastName}
      </td>
      <td>
        {zipCode}
      </td>
    </tr>
  );
}

export default App;
