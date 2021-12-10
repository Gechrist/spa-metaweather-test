import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const Modalview = (props) => {
  console.log(props.data);

  const data = props.data.consolidated_weather;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props?.data?.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup as="ul">
          <ListGroup.Item as="li">id: {data && data[0]?.id}</ListGroup.Item>
          <ListGroup.Item as="li">
            date: {data && data[0]?.applicable_date}
          </ListGroup.Item>
          <ListGroup.Item as="li">
            weather state: {data && data[0]?.weather_state_name}
          </ListGroup.Item>
          <ListGroup.Item as="li">
            weather state abbr: {data && data[0]?.weather_state_abbr}
          </ListGroup.Item>
          <ListGroup.Item as="li">
            wind speed: {data && data[0]?.wind_speed}
          </ListGroup.Item>
          <ListGroup.Item as="li">
            wind direction: {data && data[0]?.wind_direction}
          </ListGroup.Item>
          <ListGroup.Item as="li">
            compass point wind direction:{' '}
            {data && data[0]?.wind_direction_compass}
          </ListGroup.Item>
          <ListGroup.Item as="li">
            min temp: {data && data[0]?.min_temp}
          </ListGroup.Item>
          <ListGroup.Item as="li">
            max temp: {data && data[0]?.max_temp}
          </ListGroup.Item>
          <ListGroup.Item as="li">
            temp: {data && data[0]?.the_temp}
          </ListGroup.Item>
          <ListGroup.Item as="li">
            humidity: {data && data[0]?.humidity}
          </ListGroup.Item>
          <ListGroup.Item as="li">
            visibility: {data && data[0]?.visibility}
          </ListGroup.Item>
          <ListGroup.Item as="li">
            predictability: {data && data[0]?.predictability}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modalview;
