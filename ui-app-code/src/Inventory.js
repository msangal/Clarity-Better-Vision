import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function Inventory() {
  const [Glasses, fetchGlasses] = useState([])
  const [glassId, setGlassId] = useState(null);

  const getGlassesData = () => {
    console.log("Get all details stored in inventory");
    fetch('http://localhost:9000/')
    .then((response) => response.json())
    .then((response) => {
      console.log("Data fechted: ", response.glassesData);
      fetchGlasses(response.glassesData);
    })
  }

  useEffect(() => {
    getGlassesData()
  }, [])

  const updateGlassStatus = () => {
    console.log("Update glass status detail in inventory");
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: 1,
        status: "new val"
      })
    };
    fetch('http://localhost:9000/', requestOptions)
    .then(response => response.json())
    .then(response => {
      console.log("Data received after updating status: ", response);
      setGlassId(response.id)
    });
  }

  if(Glasses.length == 0)
  return (
    <h3>No data found</h3>
  );

  return (
    <div className="m-5">
      <Table striped bordered hover size="sm" responsive>
        <thead>
          <tr>
            <th>GlassId</th>
            <th>Email</th>
            <th>Type</th>
            <th>Status</th>
            <th>Office</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {Glasses != null && Glasses.map((glass, i) => {
            return (
              <tr key={i}>
                {
                  Object.keys(glass).map((property,j) => {
                    if(!(glass[property] instanceof Object)) {
                    return <td key={j}>{glass[property]}</td>
                    }
                  })
                }
                <td><Button size="sm" onClick={updateGlassStatus}>Edit status</Button></td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Inventory;