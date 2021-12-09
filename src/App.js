import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function App() {
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
              />
              <Button variant="outline-secondary" id="button-addon2">
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
            </Container>
          </Row>
        </Col>
      </Container>
    </div>
  );
}

export default App;
