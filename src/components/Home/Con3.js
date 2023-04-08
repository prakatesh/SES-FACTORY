import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap'
import style from '../../assets/Styles/Home/con3.module.css'
import im1 from '../../assets/Images/Home/ceo.gif'
import im2 from '../../assets/Images/Home/pan.jpeg'
import im3 from '../../assets/Images/Home/employees.jpeg'
import im4 from '../../assets/Images/Home/pan.jpeg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
library.add(faBuilding);
function Con3() {
  return (
    <Row className={style.card} style={{textAlign:"center",justifyContent:"center"}}>
    <Col md={2}>
    </Col>
    <Col md={2}>
    <Card  className={style.c2} style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}}>
    <Card.Img className={style.c1} variant="top" src={im1}/>
    <hr></hr>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Name of CEO</Card.Subtitle>
        <Card.Text>
         <b>R Balakrishnan</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col md={2}>
    <Card className={style.c2} style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"}}>
    <Card.Img className={style.c1} variant="top" src={im2}/>
    <hr></hr>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Nature of Business</Card.Subtitle>
        <Card.Text>
        <b>Manufacturer</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col md={2}>
    <Card className={style.c2}  style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
    <Card.Img className={style.c1} variant="top" src={im3}/>
    <hr></hr>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Number of Employees</Card.Subtitle>
        <Card.Text>
        <b>30</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col md={2}>
    <Card className={style.c2}  style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" }}>
    <Card.Img className={style.c1} variant="top" src={im4}/>
    <hr></hr>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">Market Covered</Card.Subtitle>
        <Card.Text>
        <b>Pan India</b>
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