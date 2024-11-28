import { Component } from 'react'
import CommentsList from './CommentsList'
import AddComment from './AddComment'

class CommentArea extends Component {
  state = {
    comments: [], // Array per salvare i commenti del libro
  }

  componentDidMount() {
    // Recupera i commenti iniziali quando il componente viene montato
    this.fetchComments()
  }

  componentDidUpdate(prevProps) {
    // Se cambia il libro selezionato, aggiorna i commenti
    if (prevProps.bookId !== this.props.bookId) {
      this.fetchComments()
    }
  }

  fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NzY5NDA2ZmM4YzAwMTU2Yjg3MDYiLCJpYXQiOjE3MzI4MDIxOTYsImV4cCI6MTczNDAxMTc5Nn0.s8xnvn0oTrAw-JIVpVPqhR8IoH5hUIadtb9w1nZr9ns',
          },
        }
      )

      if (response.ok) {
        const comments = await response.json()
        this.setState({ comments }) // Aggiorna lo stato con i commenti recuperati
      } else {
        console.error('Errore nel recupero dei commenti')
      }
    } catch (error) {
      console.error('Errore nella fetch:', error)
    }
  }

  handleCommentAdded = (newComment) => {
    // Aggiunge un nuovo commento alla lista dei commenti
    this.setState((prevState) => ({
      comments: [...prevState.comments, newComment],
    }))
  }

  render() {
    return (
      <div className="comment-area">
        <h5>Comments for Book: {this.props.bookId}</h5>
        <CommentsList comments={this.state.comments} />
        <AddComment
          bookId={this.props.bookId}
          onCommentAdded={this.handleCommentAdded}
        />
      </div>
    )
  }
}

export default CommentArea
