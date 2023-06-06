import { Container, Card } from 'react-bootstrap'

export default function CommentList({ commentsArray }) {
  return (
    <Container>
      {
        commentsArray.map(comment => (
          <Card key={comment.id} className='mt-1'>
            <Card.Header>{comment.email}</Card.Header>
            <Card.Body>{comment.body}</Card.Body>
          </Card>
        )
      )}
    </Container>
  )
}