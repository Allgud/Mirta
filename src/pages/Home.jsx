import { Container } from "react-bootstrap";
import Post from "../components/Post";
import { useSelector } from "react-redux";

export default function Home() {
  const { posts } = useSelector(store => store.posts)
  const { users } = useSelector(store => store.users)
  
  return (
    <Container style={{ width: "100%", marginTop: "2rem" }} as="ul">
        {
        posts.map(post => {
          const author = users.find(el => el.id === post.userId)
          return <Post key={post.id} title={post.title} text={post.body} postId={post.id} author={author.name} userId={post.userId } />
          })
        }
    </Container>
  );
}