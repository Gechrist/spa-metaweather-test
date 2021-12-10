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

  //use Location Search
  const queryHandler = async () => {
    try {
      const response = await fetch(
        `https://metaweather.com/api/location/search/?query=${query}`,
        {
          method: 'GET',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const results = await response.json();
      setData(results);
      console.log('res', results);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="App">
      <Container fluid>
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
            <Container
              className="shadow p-3 mb-5 bg-body rounded"
              sm={12}
              md={6}
              style={{ height: 400 }}
            >
              <div className="text-center">
                <h2>Results</h2>
              </div>
              {data.length > 0 ? (
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
              ) : (
                <p>{error}</p>
              )}
            </Container>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;
