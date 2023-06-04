import { Container, Col } from "react-bootstrap";
import Post from "../components/Post";

export default function Home() {

  return (
    <Container className="mt-5" style={{ width: "100%" }}>
      <Col className="d-flex justify-content-center ">
        <Post title="Lorem ipsum" text="gfdjhvejfekjhischijis" id={1} />
      </Col>
    </Container>
  );
}