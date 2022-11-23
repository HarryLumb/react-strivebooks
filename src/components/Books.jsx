import { Component } from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import historyBooks from '../data/history.json'

class Books extends Component{
    render() {
        return (
            <Container>
            <Row>
              {historyBooks.map(book => (
                <Col key={book.asin} className="mb-2" lg={3} md={4} sm={6} xs={12}>
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
       ) }

        
    }
 
export default Books