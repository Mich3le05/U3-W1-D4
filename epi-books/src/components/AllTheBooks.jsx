import { Card, Col, Row, Button } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'

const AllTheBooks = () => {
  return (
    <Row className="g-3">
      {fantasy.map((book) => {
        return (
          <Col xs={12} md={4} key={book.asin}>
            <Card className="book-cover d-flex flex-column h-100">
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>${book.price}</Card.Text>
                <Button variant="success">Read</Button>
              </Card.Body>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default AllTheBooks
