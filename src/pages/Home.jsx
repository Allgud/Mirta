import { Container } from "react-bootstrap";
import Post from "../components/Post";
import { useSelector } from "react-redux";

export default function Home() {
  const { posts } = useSelector(store => store.posts)

  return (
    <Container style={{ width: "100%", marginTop: "2rem" }} as="ul">
        {
          posts.map(post => (
            <Post key={post.id} title={post.title} text={post.body} id={post.id}/>
          ))
        }
    </Container>
  );
}