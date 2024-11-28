import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentsList = ({ comments }) => {
  return (
    <ListGroup>
      {comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </ListGroup>
  )
}

export default CommentsList
