import { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    return (
      <>
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: this.state.selected ? '3px solid black' : 'none' }}
          className="d-flex flex-column text-black"
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            alt={this.props.book.title}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>${this.props.book.price}</Card.Text>
            <Button variant="success">Read</Button>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={this.props.book.asin} />}
      </>
    )
  }
}

export default SingleBook
