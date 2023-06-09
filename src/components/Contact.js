import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../styles/Contact.css';

function Contact() {
  return (
    <>
      <div className="contact-cont">
        <h2 className="contact-heading">CONTACT US</h2>
        <Container>
          <Row className="row-cont">
            <Col sm={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Body className="card-box">
                  <Card.Title>Godwin Ogedegbe</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    +2349074094015
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    godwin@ulesson.com
                  </Card.Subtitle>
                  <Card.Text>Jabi lake mall, Abuja, FCT</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Kikachukwu Omordia</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    +2348022222138
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    kikachukwu@ulesson.com
                  </Card.Subtitle>
                  <Card.Text>Palms Mall, Ibadan, Oyo</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Isioma Nwaligbe</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    +2348027170851
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    isioma@ulesson.com
                  </Card.Subtitle>
                  <Card.Text>Purple Mall, Maryland, Lagos</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Uwana Solomon</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    +2347034537358
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    solomonuwana@ulesson.com
                  </Card.Subtitle>
                  <Card.Text>Garden City Mall, PH, Rivers</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="row-cont">
            <Col sm={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Body className="card-box">
                  <Card.Title>Okechukwu Ochulo</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    +2348023102818
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    okey@ulesson.com
                  </Card.Subtitle>
                  <Card.Text>Dreamworld Park, Owerri, Imo</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Body className="card-box">
                  <Card.Title>Isioma Nwaligbe</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    +2348027170851
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    isioma@ulesson.com
                  </Card.Subtitle>
                  <Card.Text>Leisure Mall, Surulere, Lagos</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Body className="card-box">
                  <Card.Title>Uwana Solomon</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    +2347034537358
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    solomonuwana@ulesson.com
                  </Card.Subtitle>
                  <Card.Text>Tropicana Mall, Uyo, Akwa-Ibom</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={3}>
              <Card style={{ width: '18rem' }}>
                <Card.Body className="card-box">
                  <Card.Title>Okechukwu Ochulo</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    +2348023102818
                  </Card.Subtitle>
                  <Card.Subtitle className="mb-2 text-muted">
                    okey@ulesson.com
                  </Card.Subtitle>
                  <Card.Text>Palms Polo Park , Enugu</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Contact;
