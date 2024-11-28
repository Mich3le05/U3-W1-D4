import { ListGroup, Button } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NzY5NDA2ZmM4YzAwMTU2Yjg3MDYiLCJpYXQiOjE3MzI4MDIxOTYsImV4cCI6MTczNDAxMTc5Nn0.s8xnvn0oTrAw-JIVpVPqhR8IoH5hUIadtb9w1nZr9ns',
          },
        }
      )

      if (response.ok) {
        alert('Comment deleted successfully')
      } else {
        alert('Error deleting comment')
      }
    } catch (error) {
      console.error('Errore nella cancellazione:', error)
    }
  }

  return (
    <ListGroup.Item>
      <p>{comment.comment}</p>
      <small>Rating: {comment.rate}</small>
      <Button
        variant="danger"
        size="sm"
        onClick={handleDelete}
        className="float-end"
      >
        Delete
      </Button>
    </ListGroup.Item>
  )
}

export default SingleComment
