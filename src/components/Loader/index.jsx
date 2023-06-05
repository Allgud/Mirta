import { Container, Spinner } from "react-bootstrap";

export default function Loader() {
  return (
    <Container className="d-flex justify-content-center">
      <Spinner animation="border" role="status" variant="primary" className="mt-5" />
    </Container>
  );
}