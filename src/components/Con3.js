import Card from 'react-bootstrap/Card';
import {FaUser} from 'react-icons/fa'
import {Row,Col} from 'react-bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
library.add(faBuilding);
function Con3() {
  return (
    <Row>

    <Col md={2}>
    </Col>

    <Col md={2}>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><FaUser/></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Name of CEO</Card.Subtitle>
        <Card.Text>
         Mr.M.Ganesan
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col md={2}>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><FaUser/></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Name of CEO</Card.Subtitle>
        <Card.Text>
         Mr.M.Ganesan
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col md={2}>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><FaUser/></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Name of CEO</Card.Subtitle>
        <Card.Text>
         Mr.M.Ganesan
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col md={2}>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title><FaUser/></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Name of CEO</Card.Subtitle>
        <Card.Text>
         Mr.M.Ganesan
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col md={2}>
    </Col>

    </Row>
  );
}

export default Con3;