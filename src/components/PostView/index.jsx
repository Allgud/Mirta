import { Container } from "react-bootstrap";
import Post from '../Post'

export default function PostView({ posts, users, authorName }) {

  return (
    <Container style={{ width: "100%" }} className="mt-3">
      {
        posts.map(post => {
            const author = users?.find(el => el.id === post.userId) || authorName
            return <Post
              key={post.id}
              title={post.title}
              text={post.body}
              postId={post.id}
              author={author.name}
              userId={post.userId}
            />
          })
      }
    </Container>
  )
}