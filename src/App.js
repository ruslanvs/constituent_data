import './App.css';

const columns = ['email', 'firstName', 'lastName', 'zipCode'];
const columnHeaders = {
  email: 'Email',
  firstName: 'Fist Name',
  lastName: 'Last Name',
  zipCode: 'Zip Code',
}

const constituents = [
  {
    email: 'bill.black@email.com',
    firstName: 'Bill',
    lastName: 'Black',
    zipCode: '12345',
  },
  {
    email: 'anny.smith@email.com',
    firstName: 'Anny',
    lastName: 'Smith',
    zipCode: '12345',
  },
]

function App() {
  return (
    <>
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
