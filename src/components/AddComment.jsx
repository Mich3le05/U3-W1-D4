import { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class AddComment extends Component {
  state = {
    comment: '',
    rate: 1,
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    const newComment = {
      comment: this.state.comment,
      rate: this.state.rate,
      elementId: this.props.bookId,
    }

    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NzY5NDA2ZmM4YzAwMTU2Yjg3MDYiLCJpYXQiOjE3MzI4MDIxOTYsImV4cCI6MTczNDAxMTc5Nn0.s8xnvn0oTrAw-JIVpVPqhR8IoH5hUIadtb9w1nZr9ns',
          },
          body: JSON.stringify(newComment),
        }
      )

      if (response.ok) {
        const savedComment = await response.json()
        this.props.onCommentAdded(savedComment)
        this.setState({ comment: '', rate: 1 }) // Resetta il form
      } else {
        alert('Error adding comment')
      }
    } catch (error) {
      console.error("Errore nell'aggiunta del commento:", error)
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Write your comment..."
            value={this.state.comment}
            onChange={(e) => this.setState({ comment: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mt-2">
          <Form.Label>Rate</Form.Label>
          <Form.Control
            as="select"
            value={this.state.rate}
            onChange={(e) => this.setState({ rate: e.target.value })}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary" className="mt-3">
          Add Comment
        </Button>
      </Form>
    )
  }
}

export default AddComment
