import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Paginator from "../components/Paginator";
import PostView from "../components/PostView";
import Sorting from "../components/Sorting";

export default function Home() {
  const { postsView, currentPage } = useSelector(store => store.posts)
  const { users } = useSelector(store => store.users)
  
  return (
    <Container style={{ width: "100%" }}>
      <Sorting />
      <PostView posts={postsView[currentPage]} users={users}/>
      <Paginator />
    </Container>
  );
}