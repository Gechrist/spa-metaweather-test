import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Table from 'react-bootstrap/Table';

function App() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  // Location Search
  const queryHandler = async () => {
    const response = await fetch('http://localhost:5000/getData', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: query }),
    });
    try {
      setError('');
      const results = await response.json();
      Object.keys(results).length === 0
        ? setError('Nothing found')
        : setData(results);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="App">
      <Container sm={12} md={6}>
        <Col>
          <Row>
            <InputGroup className="mt-5 mb-5">
              <FormControl
                placeholder="Search location weather"
                aria-label="Search location weather"
                aria-describedby="basic-addon2"
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button
                variant="outline-secondary"
                id="button-addon2"
                onClick={() => queryHandler()}
              >
                Search
              </Button>
            </InputGroup>
          </Row>
          <Row>
            <Container className="shadow p-3 mb-5 bg-body rounded">
              <div className="text-center">
                <h2>Results</h2>
              </div>
              {data.length > 0 && !error && (
                <Table size="sm">
                  <thead>
                    <tr>
                      <th>Location</th>
                      <th>Type</th>
                      <th>Coordinates</th>
                      <th>EarthID</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((location, index) => (
                      <tr key={index}>
                        <td>{location.title}</td>
                        <td>{location.location_type}</td>
                        <td>{location.latt_long}</td>
                        <td>{location.woeid}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
              <h2>{error}</h2>
            </Container>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;
