import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import HistoryBooks from '../data/history.json'

const Books = () => (
  <Container>
    <Row>
      {HistoryBooks.map((book) => (
        <Col className="mb-2" lg={3}>
          <Card style={{ width: '250px', height:"600px" }}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                <Button>Buy: ${book.price}</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
)
export default Books